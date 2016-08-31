<?php declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Predicate\Framework;

/**
 * FloatP test
 *
 * @see FloatP
 * @coversDefaultClass Framework\Framework\FloatP
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package Framework\Framework
 * @since 1.0
 */
class FloatPTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::__construct
     * @covers ::__invoke()
     */
    public function testInvoke()
    {
        $this->assertTrue((new FloatP(new TrueP))(1.22));
        $this->assertFalse((new FloatP(new FalseP))(-1.22));
    }


    /**
     * @covers ::__construct
     * @covers ::__invoke()
     * @expectedException \InvalidArgumentException
     * @expectedExceptionMessage This predicate is only on float subject
     */
    public function testInvalidSubject()
    {
        $this->assertTrue((new FloatP(new FalseP))(1));
    }
}
