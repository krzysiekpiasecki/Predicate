<?php declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Predicate\Common;

/**
 * IsScalarP test
 *
 * @see IsScalarP
 * @coversDefaultClass Framework\Common\IsScalarP
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package predicate\Common
 * @since 1.0
 */
class IsScalarPTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::__construct
     * @covers ::__invoke()
     */
    public function testInvoke()
    {
        $this->assertTrue((new IsScalarP())(true, 1, 1.22, '', 'Hello'));
        $this->assertFalse((new IsScalarP())(1, [1, 2, 3]));
    }
}
