<?php

declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace p;

/**
 * Test {@see evenp}.
 *
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package P
 * @since 1.0
 */
class EvenpTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::\p\evenp
     */
    public function testEvenp()
    {
        $this->assertTrue(evenp(2));
        $this->assertFalse(evenp(3));
    }
}
