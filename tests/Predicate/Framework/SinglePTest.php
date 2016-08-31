<?php declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Predicate\Framework;

/**
 * SingleP test
 *
 * @see SingleP
 * @coversDefaultClass Framework\Framework\SingleP
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package Framework\Framework
 * @since 1.0
 */
class SinglePTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::__construct
     * @covers ::__invoke()
     */
    public function testInvoke()
    {
        $this->assertTrue((new SingleP(new TrueP))(1));
    }


    /**
     * @covers ::__construct
     * @covers ::__invoke()
     * @expectedException \BadMethodCallException
     * @expectedExceptionMessage This is the predicate of one subject
     */
    public function testInvalidSubjectCount()
    {
        $this->assertTrue((new SingleP(new FalseP))(1, 2));
    }

    /**
     * @covers ::__construct
     * @covers ::__invoke()
     * @expectedException \BadMethodCallException
     * @expectedExceptionMessage This is the predicate of one subject
     */
    public function testNoSubject()
    {
        $this->assertTrue((new SingleP(new FalseP))());
    }
}
