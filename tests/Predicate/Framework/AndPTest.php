<?php declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Predicate\Framework;

/**
 * AndP test
 *
 * @see AndP
 * @coversDefaultClass Framework\Framework\AndP
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package Framework\Framework
 * @since 1.0
 */
class AndPTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::__construct
     * @covers ::__invoke()
     */
    public function testInvoke()
    {
        $this->assertFalse((new AndP(new TrueP, new FalseP))(null));
        $this->assertTrue((new AndP(new TrueP, new TrueP))(null));
    }

    /**
     * @covers ::__construct
     * @covers ::__invoke()
     */
    public function testStopAfterFalse()
    {
        $this->assertFalse((new AndP(new FalseP, new class() implements Predicate {
            public function __invoke(...$args): bool
            {
                throw new \RuntimeException('Fake predicate exception');
            }
        }))(null));
    }

    /**
     * @covers ::__construct
     * @covers ::__invoke()
     * @expectedException \RuntimeException
     * @expectedExceptionMessage Fake predicate exception
     */
    public function testContinueAfterTrue()
    {
        (new AndP(new TrueP, new class() implements Predicate {
            public function __invoke(...$subject): bool
            {
                throw new \RuntimeException('Fake predicate exception');
            }
        }))(null);
    }
}
