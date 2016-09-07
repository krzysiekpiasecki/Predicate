<?php declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Predicate\Common;

/**
 * IsBoolP test
 *
 * @see IsBoolP
 * @coversDefaultClass Framework\Common\IsBoolP
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package predicate\Common
 * @since 1.0
 */
class IsBoolPTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::__construct
     * @covers ::__invoke()
     */
    public function testInvoke()
    {
        $this->assertTrue((new IsBoolP())(true, false, true, false));
        $this->assertFalse((new IsBoolP())(true, false, true, 1));
    }
}
