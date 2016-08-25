<?php declare (strict_types = 1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Functor;

/**
 * StringP test
 *
 * @see StringP
 * @coversDefaultClass Functor\StringP
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package Functor\Predicate
 * @since 1.0
 */
class StringPTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::__construct
     * @covers ::__invoke()
     */
    public function testInvoke()
    {
        $this->assertTrue((new StringP(new TrueP))('1.22'));
        $this->assertFalse((new StringP(new FalseP))(''));
        $this->assertFalse((new StringP(new FalseP))('Hello World!'));
    }


    /**
     * @covers ::__construct
     * @covers ::__invoke()
     * @expectedException \InvalidArgumentException
     * @expectedExceptionMessage This predicate is only on string subject
     */
    public function testInvalidSubject()
    {
        $this->assertTrue((new StringP(new FalseP))(1.22));
    }
}
