<?php

declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Predicate\Common;

use Predicate\Framework\Predicate;

/**
 * Predicate that all input arguments are equal
 *
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package Predicate\Common
 * @since 1.0
 */
final class EqualP implements Predicate
{
    /**
     * @inheritdoc
     */
    public function __invoke(...$args): bool
    {
        $result = true;

        if (isset($args[0])) {
            $first = $args[0];
        }
        for ($i = 1; $i < count($args); ++$i) {
            $x = $args[$i];
            if ($first != $x) {
                return false;
            }
        }

        return $result;
    }
}
