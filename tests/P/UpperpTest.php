<?php

declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace P;

/**
 * Test {@see upperp}.
 *
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package p
 * @since 1.0
 */
class UpperpTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::\p\upperp
     */
    public function testUpperp()
    {
        $this->assertTrue(upperp('HELLO'));
        $this->assertFalse(upperp('HELLo'));
    }
}
