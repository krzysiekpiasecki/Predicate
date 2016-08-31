<?php declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Predicate\Framework;

use Predicate as P;

/**
 * IfP test
 *
 * @see IfP
 * @coversDefaultClass Framework\Framework\IfP
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package Framework\Framework
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
