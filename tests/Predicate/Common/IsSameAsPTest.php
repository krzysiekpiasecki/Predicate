<?php

declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Predicate\Common;

/**
 * IsSameAsP test
 *
 * @see IsSameAsP
 * @coversDefaultClass Framework\Common\IsSameAsP
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package predicate\Common
 * @since 1.0
 */
class IsSameAsPTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::__construct
     * @covers ::__invoke()
     */
    public function testInvoke()
    {
        $this->assertTrue((new IsSameAsP())());
        $this->assertTrue((new IsSameAsP())(null));
        $this->assertTrue((new IsSameAsP(1))(1));
        $this->assertFalse((new IsSameAsP(1))(1, '1'));
        $this->assertFalse((new IsSameAsP())(''));
    }
}
