<?php

declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace p;

/**
 * Composed predicate that represents a short-circuiting logical OR.
 *
 * Example of usage:
 * <pre>
 * $p = \p\orp(
 *    'p\intp',
 *    'p\stringp',
 * );
 *
 * $p(2); // true
 * $p('Hello'); // true
 * $p(false); // false
 * </pre>
 *
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package p
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
