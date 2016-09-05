<?php

declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace P;

/**
 * Composed predicate that represents a short-circuiting
 * logical AND on the list of the predicates
 *
 * Example of usage:
 * <pre>
 * $p = \P\andp(
 *    'P\intp',
 *    'P\evenp',
 * );
 *
 * $p(2); // true
 * $p(3); // false
 * </pre>
 *
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package P
 * @since 1.0
 * @param callable $ps List of the predicates
 * @return bool May be true or false depending on the x argument
 */
function orp(callable ...$ps): callable
{
    return function (...$x) use (&$ps): bool {
        foreach ($ps as $p) {
            if (true === $p(...$x)) {
                return true;
            }
        }
        return false;
    };
}
