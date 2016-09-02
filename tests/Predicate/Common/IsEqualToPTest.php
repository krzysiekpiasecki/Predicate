<?php

declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Predicate\Common;

/**
 * IsEqualToP test
 *
 * @see IsEqualToP
 * @coversDefaultClass Framework\Common\IsEqualToP
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package Predicate\Common
 * @since 1.0
 */
class IsEqualToPTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::__construct
     * @covers ::__invoke()
     */
    public function testInvoke()
    {
        $this->assertTrue((new IsEqualToP())());
        $this->assertTrue((new IsEqualToP())(null, '', false));
        $this->assertTrue((new IsEqualToP(1))(1, '1', '1.0', true));
        $this->assertFalse((new IsEqualToP(1))(1, '1.0', false));
        $this->assertFalse((new IsEqualToP())(true));
    }
}
