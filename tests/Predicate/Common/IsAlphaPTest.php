<?php

declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Predicate\Common;

/**
 * IsAlphaP test
 *
 * @see IsAlphaP
 * @coversDefaultClass Framework\Common\IsAlphaP
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package Predicate\Common
 * @since 1.0
 */
class IsAlphaPTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::__construct
     * @covers ::__invoke()
     */
    public function testInvoke()
    {
        $this->assertTrue((new IsAlphaP())('asdf', 'qwerty'));
        $this->assertFalse((new IsAlphaP())('zxcv', '1234'));
    }
}
