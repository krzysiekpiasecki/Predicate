<?php

declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace p\str;

/**
 * Test {@see alphap}.
 *
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package p
 * @since 1.0
 */
class AlphapTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::\p\str\alphap
     */
    public function testAlphap()
    {
        $this->assertTrue(alphap('asdf'));
        $this->assertFalse(alphap('asdf1975'));
    }
}
