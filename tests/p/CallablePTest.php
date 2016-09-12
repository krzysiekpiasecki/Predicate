<?php

declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace p;

/**
 * Test {@see callablep}.
 *
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package p
 * @since 1.0
 */
class CallablePTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::\p\callablep
     */
    public function testCallablep()
    {
        $this->assertTrue(callablep('is_string'));
        $this->assertTrue(callablep('p\callablep'));
        $this->assertTrue(callablep([$this, 'testCallablep']));
        $this->assertFalse(callablep('callablep'));
    }
}
