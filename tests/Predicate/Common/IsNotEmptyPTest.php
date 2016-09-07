<?php declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Predicate\Common;

/**
 * NotEmptyP test
 *
 * @see IsNotEmptyP
 * @coversDefaultClass Framework\Common\IsNotEmptyP
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package predicate\Common
 * @since 1.0
 */
class IsNotEmptyPTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::__construct
     * @covers ::__invoke()
     */
    public function testInvoke()
    {
        $this->assertTrue((new IsNotEmptyP())([1, 2]));
        $this->assertTrue((new IsNotEmptyP())(true));
        $this->assertTrue((new IsNotEmptyP())(1.22));

        $this->assertFalse((new IsNotEmptyP())([]));
        $this->assertFalse((new IsNotEmptyP())(''));
        $this->assertFalse((new IsNotEmptyP())(false));
    }
}
