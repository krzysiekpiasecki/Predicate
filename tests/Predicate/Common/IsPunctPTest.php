<?php

declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Predicate\Common;

/**
 * IsPunctP test
 *
 * @see IsPunctP
 * @coversDefaultClass Framework\Common\IsPunctP
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package Predicate\Common
 * @since 1.0
 */
class IsPunctPTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::__construct
     * @covers ::__invoke()
     */
    public function testInvoke()
    {
        $this->assertTrue((new IsPunctP())('*&$()', '*&$()'));
        $this->assertFalse((new IsPunctP())('*&$()', 'ABasdk!@!$#'));
        $this->assertFalse((new IsPunctP())('*&$()', '!@ # $'));
    }
}
