<?php

declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace p\num;

/**
 * Test {@see oddp}.
 *
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package p
 * @since 1.0
 */
class OddpTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::\p\oddp
     */
    public function testOddp()
    {
        $this->assertTrue(oddp(1));
        $this->assertFalse(oddp(2));
    }
}
