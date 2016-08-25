<?php declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Functor\Predicate;

use Predicate as P;

/**
 * IntP test
 *
 * @see IntP
 * @coversDefaultClass Functor\Predicate\IntP
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package Functor\Predicate
 * @since 1.0
 */
class IntPTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::__construct
     * @covers ::__invoke()
     */
    public function testInvoke()
    {
        $this->assertTrue((new IntP(new TrueP))(1));
        $this->assertFalse((new IntP(new FalseP))(1));
    }


    /**
     * @covers ::__construct
     * @covers ::__invoke()
     * @expectedException \InvalidArgumentException
     * @expectedExceptionMessage This predicate is only on int subject
     */
    public function testInvalidSubject()
    {
        $this->assertTrue((new IntP(new FalseP))(1.22));
    }
}
