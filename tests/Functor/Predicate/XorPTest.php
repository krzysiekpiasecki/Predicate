<?php declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Functor\Predicate;

/**
 * XorP test
 *
 * @see XorP
 * @coversDefaultClass Functor\Predicate\XorP
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package Functor\Predicate
 * @since 1.0
 */
class XorPTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::__construct
     * @covers ::__invoke()
     */
    public function testInvoke()
    {
        $this->assertFalse((new XorP(new FalseP, new FalseP))(null));
        $this->assertFalse((new XorP(new TrueP, new TrueP))(null));
        $this->assertFalse((new XorP(new FalseP, new FalseP, new FalseP))(null));
        $this->assertTrue((new XorP(new FalseP, new FalseP, new TrueP))(null));

        $this->assertTrue((new XorP(new FalseP, new TrueP))(null));
        $this->assertTrue((new XorP(new TrueP, new FalseP))(null));
        $this->assertTrue((new XorP(new TrueP, new FalseP, new FalseP))(null));
        $this->assertFalse((new XorP(new TrueP, new FalseP, new TrueP))(null));
    }
}
