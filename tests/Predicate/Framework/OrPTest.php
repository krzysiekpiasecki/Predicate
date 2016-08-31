<?php declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Predicate\Framework;

/**
 * OrP test
 *
 * @see OrP
 * @coversDefaultClass Framework\Framework\OrP
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package Framework\Framework
 * @since 1.0
 */
class OrPTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::__construct
     * @covers ::__invoke()
     */
    public function testInvoke()
    {
        $this->assertFalse((new OrP(new FalseP, new FalseP))(null));
        $this->assertTrue((new OrP(new FalseP, new TrueP))(null));
    }

    /**
     * @covers ::__construct
     * @covers ::__invoke()
     */
    public function testStopAfterTrue()
    {
        $this->assertTrue((new OrP(new TrueP, new class() implements Predicate {
            public function __invoke(...$subject): bool
            {
                throw new \RuntimeException('Fake predicate exception');
            }
        }))(true));
    }

    /**
     * @covers ::__construct
     * @covers ::__invoke()
     * @expectedException \RuntimeException
     * @expectedExceptionMessage Fake predicate exception
     */
    public function testContinueAfterFalse()
    {
        (new OrP(new FalseP, new class() implements Predicate {
            public function __invoke(...$subject): bool
            {
                throw new \RuntimeException('Fake predicate exception');
            }
        }))(null);
    }
}
