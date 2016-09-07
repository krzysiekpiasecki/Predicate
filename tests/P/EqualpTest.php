<?php

declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace p;

/**
 * Test {@see equalp}.
 *
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package P
 * @since 1.0
 */
class EqualpTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::\p\equalp
     */
    public function testEqualp()
    {
        $this->assertTrue(equalp(1, 1));
        $this->assertTrue(equalp(1, '1'));
        $this->assertFalse(equalp('1', '1 '));
    }
}
