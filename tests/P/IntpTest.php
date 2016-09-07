<?php

declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace p;

/**
 * Test {@see intp}.
 *
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package P
 * @since 1.0
 */
class IntpTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::\p\intp
     */
    public function testIntp()
    {
        $this->assertTrue(intp(1));
        $this->assertFalse(intp('1'));
        $this->assertFalse(intp(1.22));
    }
}
