<?php declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Predicate\Common;

/**
 * IsNumericP test
 *
 * @see IsNumericP
 * @coversDefaultClass Framework\Common\IsNumericP
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package Predicate\Common
 * @since 1.0
 */
class IsNumericPTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::__construct
     * @covers ::__invoke()
     */
    public function testInvoke()
    {
        $this->assertTrue((new IsNumericP())('1', '1.23', 1, 1.22, 0x539, 0b10100111001, 1337e0));
        $this->assertFalse((new IsNumericP())(true, false, true, 1));
    }
}
