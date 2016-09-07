<?php

declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace p;

/**
 * Test {@see numericp}.
 *
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package P
 * @since 1.0
 */
class NumericpTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::\p\numericp
     */
    public function testNumericp()
    {
        $this->assertTrue(numericp(1));
        $this->assertTrue(numericp(1.22));
        $this->assertTrue(numericp('1.22'));
        $this->assertTrue(numericp(0xfff));
        $this->assertFalse(numericp('a1000'));
        $this->assertFalse(numericp('0xfff'));
    }
}
