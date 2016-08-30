<?php declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Functor\Predicate;

/**
 * IsFloatP test
 *
 * @see IsFloatP
 * @coversDefaultClass Functor\Predicate\IsFloatP
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package Functor\Predicate
 * @since 1.0
 */
class IsFloatPTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::__construct
     * @covers ::__invoke()
     */
    public function testInvoke()
    {
        $this->assertTrue((new IsFloatP())(1.22));
        $this->assertFalse((new IsFloatP())('1.22'));
        $this->assertFalse((new IsFloatP())(1));
    }
}
