<?php

declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace p\str;

/**
 * Test {@see digitp}.
 *
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package p
 * @since 1.0
 */
class DigitpTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::\p\str\digitp
     */
    public function testDigitp()
    {
        $this->assertTrue(digitp('0123456789'));
        $this->assertFalse(digitp('x0123456789'));
    }
}
