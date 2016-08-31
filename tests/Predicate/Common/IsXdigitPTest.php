<?php

declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Predicate\Common;

/**
 * IsXdigit test
 *
 * @see IsXdigit
 * @coversDefaultClass Framework\Common\IsXdigit
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package Predicate\Common
 * @since 1.0
 */
class IsXdigitPTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::__construct
     * @covers ::__invoke()
     */
    public function testInvoke()
    {
        $this->assertTrue((new IsXdigit())('AB10BC99', 'ab12bc99'));
        $this->assertFalse((new IsXdigit())('AB10BC99ab12bc99', 'ab12gbc99'));
    }
}
