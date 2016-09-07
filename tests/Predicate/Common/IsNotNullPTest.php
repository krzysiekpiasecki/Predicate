<?php declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Predicate\Common;

/**
 * NotNullP test
 *
 * @see IsNotNullP
 * @coversDefaultClass Framework\Common\IsNotNullP
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package predicate\Common
 * @since 1.0
 */
class IsNotNullPTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::__construct
     * @covers ::__invoke()
     */
    public function testInvoke()
    {
        $this->assertTrue((new IsNotNullP())([], 1.22, '', 0, false, ['', false, 1], new \stdClass));
        $this->assertFalse((new IsNotNullP())(1, 2.22, true, null));
    }
}
