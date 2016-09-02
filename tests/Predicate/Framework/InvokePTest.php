<?php declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Predicate\Framework;

/**
 * CallableP test
 *
 * @see CallP
 * @coversDefaultClass Framework\Framework\CallableP
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package Framework\Framework
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
        $this->assertTrue((new CallableP('is_string'))('1'));
        $this->assertFalse((new CallableP('is_string'))(1));
    }

    /**
     * @covers ::__construct
     * @covers ::__invoke()
     * @expectedException \RuntimeException
     * @expectedExceptionMessage External callable must return a boolean value
     */
    public function testInvokeInnerEvaluation()
    {
        $p = new CallableP(function ($subject) {
            return 1;
        });

        $p(null);
    }
}
