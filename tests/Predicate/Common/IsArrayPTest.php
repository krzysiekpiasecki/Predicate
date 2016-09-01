<?php declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Predicate\Common;

/**
 * IsArrayP test
 *
 * @see IsArrayP
 * @coversDefaultClass Framework\Common\IsArrayP
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package Predicate\Common
 * @since 1.0
 */
class IsArrayPTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::__construct
     * @covers ::__invoke()
     */
    public function testInvoke()
    {
        $this->assertTrue((new IsArrayP())([], [1, 2], [[], [1, 2, 3]]));
        $this->assertFalse((new IsArrayP())([1, 2], new \ArrayObject()));
    }
}
