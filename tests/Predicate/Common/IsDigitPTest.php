<?php

declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Predicate\Common;

/**
 * IsDigitP test
 *
 * @see IsDigitP
 * @coversDefaultClass Framework\Common\IsDigitP
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package predicate\Common
 * @since 1.0
 */
class IsDigitPTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::__construct
     * @covers ::__invoke()
     */
    public function testInvoke()
    {
        $this->assertTrue((new IsDigitP())('0123456789', '78901234'));
        $this->assertFalse((new IsDigitP())('8908901234', '012349582349sdf'));
    }
}
