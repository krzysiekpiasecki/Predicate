<?php

declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Predicate\Common;

/**
 * IsStrictEqualToP test
 *
 * @see IsStrictEqualToP
 * @coversDefaultClass Framework\Common\IsStrictEqualToP
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package Predicate\Common
 * @since 1.0
 */
class IsStrictEqualToPTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::__construct
     * @covers ::__invoke()
     */
    public function testInvoke()
    {
        $this->assertTrue((new IsStrictEqualToP())());
        $this->assertTrue((new IsStrictEqualToP())(null));
        $this->assertTrue((new IsStrictEqualToP(1))(1));
        $this->assertFalse((new IsStrictEqualToP(1))(1, '1'));
        $this->assertFalse((new IsStrictEqualToP())(''));
    }
}
