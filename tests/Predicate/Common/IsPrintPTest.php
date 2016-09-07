<?php

declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Predicate\Common;

/**
 * IsPrintP test
 *
 * @see IsPrintP
 * @coversDefaultClass Framework\Common\IsPrintP
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package predicate\Common
 * @since 1.0
 */
class IsPrintPTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::__construct
     * @covers ::__invoke()
     */
    public function testInvoke()
    {
        $this->assertTrue((new IsPrintP())('arf12', 'LKA#@%.54'));
        $this->assertFalse((new IsPrintP())('arf12LKA', "asdf\n\r\t"));
    }
}
