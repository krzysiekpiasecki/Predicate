<?php

declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Predicate\Common;

/**
 * IsEqualP test
 *
 * @see IsEqualP
 * @coversDefaultClass Framework\Common\IsEqualP
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package Predicate\Common
 * @since 1.0
 */
class IsEqualPTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::__construct
     * @covers ::__invoke()
     */
    public function testInvoke()
    {
        $this->assertTrue((new IsEqualP())());
        $this->assertTrue((new IsEqualP())(1));
        $this->assertTrue((new IsEqualP())(1, "1"));
        $this->assertTrue((new IsEqualP())(1, "1", "1", true));
        $this->assertTrue((new IsEqualP())(1, "1.0", 1.0));
        $this->assertFalse((new IsEqualP())(1, 2));
        $this->assertFalse((new IsEqualP())(1, 1.1));
    }
}
