<?php

declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace P;

/**
 * Test {@see samep}.
 *
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package P
 * @since 1.0
 */
class SamepTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::\p\samep
     */
    public function testSamep()
    {
        $this->assertTrue(samep(1, 1));
        $this->assertFalse(samep(1, '1'));
    }
}
