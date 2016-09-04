<?php

declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace P;

/**
 * Test {@see boolp}.
 *
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package P
 * @since 1.0
 */
class BoolpTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::\P\boolp
     */
    public function testBoolp()
    {
        $this->assertTrue(boolp(true));
        $this->assertTrue(boolp(false));
        
        $this->assertFalse(boolp(1));
        $this->assertFalse(boolp(0));
        $this->assertFalse(boolp('true'));
        $this->assertFalse(boolp('false'));
    }
}
