<?php

declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace P;

/**
 * Test {@see objectp}.
  *.
 *
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package P
 * @since 1.0
 */
class ObjectpTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::\P\objectp
     */
    public function testObjectp()
    {
        $this->assertTrue(objectp($this));
        $this->assertFalse(objectp(__CLASS__));
    }
}
