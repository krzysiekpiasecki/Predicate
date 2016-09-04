<?php

declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace P;

/**
 * Test {@see scalarp}.
 *
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package P
 * @since 1.0
 */
class ScalarpTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::\P\scalarp
     */
    public function testScalarp()
    {
        $this->assertTrue(scalarp('Hello World!'));
        $this->assertTrue(scalarp(1));
        $this->assertTrue(scalarp(1.22));
        $this->assertTrue(scalarp(true));
        $this->assertFalse(scalarp([1, 2, true]));
        $this->assertFalse(scalarp(null));
        $this->assertFalse(scalarp($this));
    }
}
