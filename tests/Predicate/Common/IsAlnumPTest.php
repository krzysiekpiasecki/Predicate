<?php

declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Predicate\Common;

/**
 * IsAlnumP test
 *
 * @see IsAlnumP
 * @coversDefaultClass Framework\Common\IsAlnumP
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package predicate\Common
 * @since 1.0
 */
class IsAlnumPTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::__construct
     * @covers ::__invoke()
     */
    public function testInvoke()
    {
        $this->assertTrue((new IsAlnumP())('0123456789asdfz', 'qwerty1234xzcv'));
        $this->assertFalse((new IsAlnumP())('1234234', 'asdfjasdf', 'ą'));
    }
}
