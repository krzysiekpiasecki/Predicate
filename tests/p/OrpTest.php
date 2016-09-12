<?php

declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace p;

/**
 * Test {@see orp}.
 *
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package p
 * @since 1.0
 */
class OrpTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::\p\orp
     */
    public function testOrp()
    {
        $this->assertTrue(
            orp(
                'P\stringp',
                'p\intp'
            )('hello')
        );
        $this->assertTrue(
            orp(
                'P\stringp',
                'p\intp'
            )(1)
        );
        $this->assertFalse(
            orp(
                'P\stringp',
                'p\intp'
            )(1.22)
        );
    }

    /**
     * @covers ::\p\orp
     */
    public function testOrpTransferArgs()
    {
        $this->assertTrue(
            orp(
                function (int $x, int $y): bool {
                    return 16 === $x * $y;
                }
            )(4, 4)
        );
    }
}
