<?php declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Predicate\Common;

/**
 * IsEmptyP test
 *
 * @see IsEmptyP
 * @coversDefaultClass Framework\Common\IsEmptyP
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package predicate\Common
 * @since 1.0
 */
class IsEmptyPTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::__construct
     * @covers ::__invoke()
     */
    public function testInvoke()
    {
        $this->assertFalse((new IsEmptyP())([1, 2]));
        $this->assertFalse((new IsEmptyP())(true));
        $this->assertFalse((new IsEmptyP())(1.22));

        $this->assertTrue((new IsEmptyP())([]));
        $this->assertTrue((new IsEmptyP())(''));
        $this->assertTrue((new IsEmptyP())(false));
    }
}
