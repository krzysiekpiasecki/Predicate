<?php

declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace p;

/**
 * Test {@see notp}.
 *
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package p
 * @since 1.0
 */
class NotpTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::\p\notp
     */
    public function testNotp()
    {
        $this->assertTrue(
            notp(
                'p\intp'
            )(1.22)
        );
        $this->assertFalse(
            notp(
                'p\intp'
            )(1)
        );
    }
}
