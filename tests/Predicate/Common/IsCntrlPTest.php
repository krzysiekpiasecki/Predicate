<?php

declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Predicate\Common;

/**
 * IsCntrlP test
 *
 * @see IsCntrlP
 * @coversDefaultClass Framework\Common\IsCntrlP
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package predicate\Common
 * @since 1.0
 */
class IsCntrlPTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::__construct
     * @covers ::__invoke()
     */
    public function testInvoke()
    {
        $this->assertTrue((new IsCntrlP())("\r\n", "\t"));
        $this->assertFalse((new IsCntrlP())("\r\n", "Hello"));
    }
}
