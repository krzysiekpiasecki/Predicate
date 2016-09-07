<?php

declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace P;

/**
 * Test {@see floatp}.
 *
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package p
 * @since 1.0
 */
class FloatpTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::\p\floatp
     */
    public function testFloatp()
    {
        $this->assertTrue(floatp(1.22));
        $this->assertFalse(floatp('1.22'));
        $this->assertFalse(floatp(1));
    }
}
