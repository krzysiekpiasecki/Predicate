<?php declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Predicate\Common;

/**
 * IsCallableP test
 *
 * @see IsCallableP
 * @coversDefaultClass Framework\Common\IsCallableP
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package predicate\Common
 * @since 1.0
 */
class IsCallablePTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::__construct
     * @covers ::__invoke()
     */
    public function testInvoke()
    {
        $this->assertTrue((new IsCallableP())('is_callable', [$this, 'testInvoke']));
        $this->assertFalse((new IsCallableP())('is_int', 'is_float', 'is_callable_xcv'));
    }
}
