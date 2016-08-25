<?php declare (strict_types = 1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Functor\Predicate;

/**
 * TrueP test
 *
 * @see TrueP
 * @coversDefaultClass Functor\Predicate\TrueP
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package Functor\Predicate
 * @since 1.0
 */
class TruePTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::__construct
     * @covers ::__invoke()
     */
    public function testInvoke()
    {
        $this->assertTrue((new TrueP(new FalseP))(null));
        $this->assertTrue((new TrueP)(null));
    }

    /**
     * @covers ::__construct
     * @covers ::__invoke()
     * @expectedException \RuntimeException
     * @expectedExceptionMessage Fake exception
     */
    public function testInvokeInnerEvaluation()
    {
        $p = new TrueP(new class implements PredicateInterface
        {
            public function __invoke(...$subject): bool
            {
                throw new \RuntimeException('Fake exception');
            }
        });

        $p(null);
    }
}
