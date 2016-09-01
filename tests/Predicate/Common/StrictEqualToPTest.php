<?php

declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Predicate\Common;

/**
 * StrictEqualToP test
 *
 * @see StrictEqualToP
 * @coversDefaultClass Framework\Common\StrictEqualToP
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package Predicate\Common
 * @since 1.0
 */
class StrictEqualToPTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::__construct
     * @covers ::__invoke()
     */
    public function testInvoke()
    {
        $this->assertTrue((new StrictEqualToP())());
        $this->assertTrue((new StrictEqualToP())(null));
        $this->assertTrue((new StrictEqualToP(1))(1));
        $this->assertFalse((new StrictEqualToP(1))(1, '1'));
        $this->assertFalse((new StrictEqualToP())(''));
    }
}
