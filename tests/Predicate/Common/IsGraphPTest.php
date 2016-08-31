<?php

declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Predicate\Common;

/**
 * IsGraphP test
 *
 * @see IsGraphP
 * @coversDefaultClass Framework\Common\IsGraphP
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package Predicate\Common
 * @since 1.0
 */
class IsGraphPTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::__construct
     * @covers ::__invoke()
     */
    public function testInvoke()
    {
        $this->assertTrue((new IsGraphP())('arf12', 'LKA#@%.54'));
        $this->assertFalse((new IsGraphP())('LKA#@%.54arf12', "asdf\n\r\tarf12"));
    }
}
