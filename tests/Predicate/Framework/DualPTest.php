<?php declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Predicate\Framework;

/**
 * DualP test
 *
 * @see DualP
 * @coversDefaultClass Framework\Framework\DualP
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package Framework\Framework
 * @since 1.0
 */
class DualPTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::__construct
     * @covers ::__invoke()
     */
    public function testInvoke()
    {
        $this->assertTrue((new DualP(new TrueP))(1, 2));
    }


    /**
     * @covers ::__construct
     * @covers ::__invoke()
     * @expectedException \BadMethodCallException
     * @expectedExceptionMessage This is the predicate of two subjects
     */
    public function testInvalidSubjectCount1()
    {
        $this->assertTrue((new DualP(new FalseP))(1));
    }

    /**
     * @covers ::__construct
     * @covers ::__invoke()
     * @expectedException \BadMethodCallException
     * @expectedExceptionMessage This is the predicate of two subjects
     */
    public function testInvalidSubjectCount3()
    {
        $this->assertTrue((new DualP(new FalseP))(1, 2, 3));
    }

    /**
     * @covers ::__construct
     * @covers ::__invoke()
     * @expectedException \BadMethodCallException
     * @expectedExceptionMessage This is the predicate of two subjects
     */
    public function testNoSubject()
    {
        $this->assertTrue((new DualP(new FalseP))());
    }
}
