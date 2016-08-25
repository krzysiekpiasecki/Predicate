<?php

declare (strict_types = 1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Functor\Predicate;

/**
 * EqualP
 *
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package Functor\Predicate
 * @since 1.0
 */
final class EqualP implements PredicateInterface
{
    /**
     * @inheritdoc
     */
    public function __invoke(...$subject): bool
    {
        $result = true;

        if (isset($subject[0])) {
            $first = $subject[0];
        }
        for ($i = 1; $i < count($subject); ++$i) {
            $x = $subject[$i];
            if ($first != $x) {
                return false;
            }
        }

        return $result;
    }
}
