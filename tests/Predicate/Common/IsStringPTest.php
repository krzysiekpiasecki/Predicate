<?php

declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Predicate\Common;

/**
 * IsStringP test
 *
 * @see IsStringP
 * @coversDefaultClass Framework\Common\IsStringP
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package Predicate\Common
 * @since 1.0
 */
class IsStringPTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::__construct
     * @covers ::__invoke()
     */
    public function testInvoke()
    {
        $this->assertTrue((new IsStringP())('1.22'));
        $this->assertTrue((new IsStringP())(''));
        $this->assertTrue((new IsStringP())('Hello World'));
        $this->assertFalse((new IsStringP())(1.22));
        $this->assertFalse((new IsStringP())(1));
    }
}
