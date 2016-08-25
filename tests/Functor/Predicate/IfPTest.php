<?php declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Functor\Predicate;

use Predicate as P;

/**
 * IfP test
 *
 * @see IfP
 * @coversDefaultClass Functor\Predicate\IfP
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package Functor\Predicate
 * @since 1.0
 */
class IfPTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::__construct
     * @covers ::__invoke()
     */
    public function testInvoke()
    {
        $this->assertTrue((new IfP(new TrueP, new TrueP))(null));
        $this->assertFalse((new IfP(new FalseP, new TrueP))(null));
    }
}
