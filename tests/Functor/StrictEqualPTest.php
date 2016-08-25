<?php

declare (strict_types = 1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Functor;

/**
 * StrictEqualP test
 *
 * @see StrictEqualP
 * @coversDefaultClass Functor\StrictEqualP
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package Functor\Predicate
 * @since 1.0
 */
class StrictEqualPTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::__construct
     * @covers ::__invoke()
     */
    public function testInvoke()
    {
        $this->assertTrue((new StrictEqualP())());
        $this->assertTrue((new StrictEqualP())(1));
        $this->assertTrue((new StrictEqualP())(1, 1));
        $this->assertTrue((new StrictEqualP())($o = new \stdClass, $o));

        $this->assertFalse((new StrictEqualP())($o = new \stdClass, clone $o));
        $this->assertFalse((new StrictEqualP())(1, "1"));
        $this->assertFalse((new StrictEqualP())(1, "1", "1", true));
        $this->assertFalse((new StrictEqualP())(1, "1.0", 1.0));
        $this->assertFalse((new StrictEqualP())(1, 2));
        $this->assertFalse((new StrictEqualP())(1, 1.1));
    }
}
