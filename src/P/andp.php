<?php

declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace p;

/**
 * Composed predicate that represents a short-circuiting logical AND
 *
 * Example of usage:
 * <pre>
 * $p = \p\andp(
 *    'p\intp',
 *    'p\evenp',
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
function andp(callable ...$ps): callable
{
    return function (...$x) use ($ps): bool {
        foreach ($ps as $p) {
            if (false === $p(...$x)) {
                return false;
            }
        }
        return true;
    };
}
