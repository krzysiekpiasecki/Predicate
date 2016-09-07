<?php

declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace p;

/**
 * Test {@see emptyp}.
 *
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package P
 * @since 1.0
 */
class EmptypTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::\p\emptyp
     */
    public function testEmptyp()
    {
        $this->assertTrue(emptyp(null));
        $this->assertTrue(emptyp(false));
        $this->assertTrue(emptyp([]));
        $this->assertTrue(emptyp(''));
        $this->assertTrue(emptyp(0));
        $this->assertFalse(emptyp(1));
        $this->assertFalse(emptyp(1.22));
    }
}
