<?php

declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace p;

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
     * @covers ::\p\andp
     */
    public function testAndp()
    {
        $this->assertTrue(
            andp(
                'p\stringp',
                'p\lowerp'
            )('hello')
        );
        $this->assertFalse(
            andp(
                'p\stringp',
                'p\lowerp'
            )('Hello')
        );
    }

    /**
     * @covers ::\p\andp
     * @expectedException \RuntimeException
     */
    public function testAndpBreak()
    {
        $this->assertTrue(
            andp(
                'p\stringp',
                function (string $x): bool {
                    throw new \RuntimeException;
                },
                'p\lowerp'
            )('hello')
        );
    }

    /**
     * @covers ::\p\andp
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
