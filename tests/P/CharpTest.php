<?php

declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace p;

/**
 * Test {@see charp}.
 *
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package P
 * @since 1.0
 */
class CharpTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::\p\charp
     */
    public function testCharp()
    {
        $this->assertFalse(charp('Hello World!'));
        $this->assertFalse(charp(1));
        $this->assertTrue(charp('h'));
        $this->assertTrue(charp('1'));
    }
}
