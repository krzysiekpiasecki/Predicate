<?php

declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Predicate\Common;

/**
 * IsSameP test
 *
 * @see IsSameP
 * @coversDefaultClass Framework\Common\IsSameP
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package Predicate\Common
 * @since 1.0
 */
class IsSamePTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::__construct
     * @covers ::__invoke()
     */
    public function testInvoke()
    {
        $this->assertTrue((new IsSameP())());
        $this->assertTrue((new IsSameP())(1));
        $this->assertTrue((new IsSameP())(1, 1));
        $this->assertTrue((new IsSameP())($o = new \stdClass, $o));

        $this->assertFalse((new IsSameP())($o = new \stdClass, clone $o));
        $this->assertFalse((new IsSameP())(1, "1"));
        $this->assertFalse((new IsSameP())(1, "1", "1", true));
        $this->assertFalse((new IsSameP())(1, "1.0", 1.0));
        $this->assertFalse((new IsSameP())(1, 2));
        $this->assertFalse((new IsSameP())(1, 1.1));
    }
}
