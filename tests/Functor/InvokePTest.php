<?php declare (strict_types = 1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Functor;

/**
 * InvokeP test
 *
 * @see CallP
 * @coversDefaultClass Functor\InvokeP
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package Functor\Predicate
 * @since 1.0
 */
class InvokePTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::__construct
     * @covers ::__invoke()
     */
    public function testInvoke()
    {
        $this->assertTrue((new InvokeP('is_string'))('1'));
        $this->assertFalse((new InvokeP('is_string'))(1));
    }

    /**
     * @covers ::__construct
     * @covers ::__invoke()
     * @expectedException \RuntimeException
     * @expectedExceptionMessage External callable must return a boolean value
     */
    public function testInvokeInnerEvaluation()
    {
        $p = new InvokeP(function ($subject) {
            return 1;
        });

        $p(null);
    }
}
