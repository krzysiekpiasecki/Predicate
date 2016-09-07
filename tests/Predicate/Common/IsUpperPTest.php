<?php

declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Predicate\Common;

/**
 * IsUpperP test
 *
 * @see IsUpperP
 * @coversDefaultClass Framework\Common\IsUpperP
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package predicate\Common
 * @since 1.0
 */
class IsUpperPTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @covers ::__construct
     * @covers ::__invoke()
     */
    public function testInvoke()
    {
        $this->assertTrue((new IsUpperP())('ASDBNZCX', 'IUOEHRJHJKL'));
        $this->assertFalse((new IsUpperP())('JKSDJFKLSJD', 'JHJSDFxSDFSDF'));
    }
}
