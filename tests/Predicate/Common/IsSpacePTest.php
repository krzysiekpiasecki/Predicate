<?php

declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Predicate\Common;

/**
 * IsSpaceP test
 *
 * @see IsSpaceP
 * @coversDefaultClass Framework\Common\IsSpaceP
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package predicate\Common
 * @since 1.0
 */
class IsSpacePTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::__construct
     * @covers ::__invoke()
     */
    public function testInvoke()
    {
        $this->assertTrue((new IsSpaceP())("\n\r", "\t"));
        $this->assertFalse((new IsSpaceP())("\n\r", "\n\r1"));
    }
}
