<?php

declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace P;

/**
 * Test {@see nullp}.
 *
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package P
 * @since 1.0
 */
class NullpTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::\P\nullp
     */
    public function testNullp()
    {
        $this->assertTrue(nullp(null));
        $this->assertFalse(nullp(false));
    }
}
