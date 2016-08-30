<?php declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Functor\Predicate;

/**
 * NotNullP test
 *
 * @see NotNullP
 * @coversDefaultClass Functor\Predicate\NotNullP
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package Functor\Predicate
 * @since 1.0
 */
class NotNullPTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::__construct
     * @covers ::__invoke()
     */
    public function testInvoke()
    {
        $this->assertTrue((new NotNullP())([], 1.22, '', 0, false, ['', false, 1], new \stdClass));
        $this->assertFalse((new NotNullP())(1, 2.22, true, null));
    }
}
