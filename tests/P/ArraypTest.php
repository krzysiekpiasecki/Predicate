<?php

declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace p;

/**
 * Test {@see arrayp}.
 *
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package P
 * @since 1.0
 */
class ArraypTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::\p\arrayp
     */
    public function testArrayp()
    {
        $this->assertTrue(arrayp([]));
        $this->assertTrue(arrayp([1, 2, false, 'Hello World!']));
        
        $this->assertFalse(arrayp(null));
        $this->assertFalse(arrayp(1));
        $this->assertFalse(arrayp(new \ArrayObject));
    }
}
