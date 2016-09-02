<?php declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Predicate\Common;

/**
 * IsNullP test
 *
 * @see IsNullP
 * @coversDefaultClass Framework\Common\IsNullP
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package Predicate\Common
 * @since 1.0
 */
class IsNullPTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::__construct
     * @covers ::__invoke()
     */
    public function testInvoke()
    {
        $this->assertTrue((new IsNullP())());
        $this->assertTrue((new IsNullP())(null, null, null));
        $this->assertFalse((new IsNullP())(null, ''));
    }
}
