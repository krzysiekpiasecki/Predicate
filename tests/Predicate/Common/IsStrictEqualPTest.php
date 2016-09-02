<?php

declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Predicate\Common;

/**
 * IsStrictEqualP test
 *
 * @see IsStrictEqualP
 * @coversDefaultClass Framework\Common\IsStrictEqualP
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package Predicate\Common
 * @since 1.0
 */
class IsStrictEqualPTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::__construct
     * @covers ::__invoke()
     */
    public function testInvoke()
    {
        $this->assertTrue((new IsStrictEqualP())());
        $this->assertTrue((new IsStrictEqualP())(1));
        $this->assertTrue((new IsStrictEqualP())(1, 1));
        $this->assertTrue((new IsStrictEqualP())($o = new \stdClass, $o));

        $this->assertFalse((new IsStrictEqualP())($o = new \stdClass, clone $o));
        $this->assertFalse((new IsStrictEqualP())(1, "1"));
        $this->assertFalse((new IsStrictEqualP())(1, "1", "1", true));
        $this->assertFalse((new IsStrictEqualP())(1, "1.0", 1.0));
        $this->assertFalse((new IsStrictEqualP())(1, 2));
        $this->assertFalse((new IsStrictEqualP())(1, 1.1));
    }
}
