<?php

declare (strict_types = 1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Functor;

/**
 * EqualP test
 *
 * @see EqualP
 * @coversDefaultClass Functor\EqualP
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package Functor\Predicate
 * @since 1.0
 */
class EqualPTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::__construct
     * @covers ::__invoke()
     */
    public function testInvoke()
    {
        $this->assertTrue((new EqualP())());
        $this->assertTrue((new EqualP())(1));
        $this->assertTrue((new EqualP())(1, "1"));
        $this->assertTrue((new EqualP())(1, "1", "1", true));
        $this->assertTrue((new EqualP())(1, "1.0", 1.0));
        $this->assertFalse((new EqualP())(1, 2));
        $this->assertFalse((new EqualP())(1, 1.1));
    }
}
