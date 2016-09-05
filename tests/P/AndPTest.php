<?php

declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace P;

/**
 * Test {@see andp}.
 *
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package P
 * @since 1.0
 */
class AndPTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::\P\andp
     */
    public function testAndp()
    {
        $this->assertTrue(
            andp(
                'P\stringp',
                'P\lowerp'
            )('hello')
        );
        $this->assertFalse(
            andp(
                'P\stringp',
                'P\lowerp'
            )('Hello')
        );
    }

    /**
     * @covers ::\P\andp
     * @expectedException \RuntimeException
     */
    public function testAndpBreak()
    {
        $this->assertTrue(
            andp(
                'P\stringp',
                function (string $x): bool {
                    throw new \RuntimeException;
                },
                'P\lowerp'
            )('hello')
        );
    }

    /**
     * @covers ::\P\andp
     */
    public function testAndpTransferArgs()
    {
        $this->assertTrue(
            andp(
                function (int $x, int $y): bool {
                    return 8 === $x * $y;
                }
            )(2, 4)
        );
    }
}
