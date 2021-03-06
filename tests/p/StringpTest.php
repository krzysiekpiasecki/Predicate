<?php

declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace p;

/**
 * Test {@see stringp}.
 *
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package p
 * @since 1.0
 */
class StringpTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::\p\stringp
     */
    public function testStringp()
    {
        $this->assertTrue(stringp('Hello World!'));
        $this->assertTrue(stringp(''));
        $this->assertFalse(stringp(1));
    }
}
