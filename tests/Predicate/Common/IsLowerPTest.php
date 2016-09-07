<?php

declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Predicate\Common;

/**
 * IsLowerP test
 *
 * @see IsLowerP
 * @coversDefaultClass Framework\Common\IsLowerP
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package predicate\Common
 * @since 1.0
 */
class IsLowerPTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::__construct
     * @covers ::__invoke()
     */
    public function testInvoke()
    {
        $this->assertTrue((new IsLowerP())('asdfasdfqwer', 'zxcvzxcvzxcv'));
        $this->assertFalse((new IsLowerP())('zxcv', 'zxcvzxcvxcvUdfsdfd'));
    }
}
