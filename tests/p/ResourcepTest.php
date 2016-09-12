<?php

declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace p;

/**
 * Test {@see resourcep}.
 *
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package p
 * @since 1.0
 */
class ResourcepTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::\p\resourcep
     */
    public function testResourceP()
    {
        $this->assertTrue(resourcep(tmpfile()));
        $this->assertFalse(resourcep(__FILE__));
    }
}
