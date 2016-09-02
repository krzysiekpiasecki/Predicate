<?php declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Predicate\Common;

/**
 * IsObjectP test
 *
 * @see IsObjectP
 * @coversDefaultClass Framework\Common\IsObjectP
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package Predicate\Common
 * @since 1.0
 */
class IsObjectPTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::__construct
     * @covers ::__invoke()
     */
    public function testInvoke()
    {
        $this->assertTrue((new IsObjectP())(new \stdClass(), clone $this));
        $this->assertFalse((new IsObjectP())(new \stdClass(), 'object'));
    }
}
