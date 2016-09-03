<?php

declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace P;

/**
 * Composed predicate that represents the logical negation of other predicate.
 *
 * <pre>
 * $p = \P\notp('P\intp');
 * $p(1.22); // true
 * $p(1); // false
 * </pre>
 *
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package P
 * @since 1.0
 * @param callable $p A negated predicate
 * @return callable A predicate that represents the logical negation of other predicate
 */
function notp(callable $p): callable
{
    return function ($x) use ($p): bool {
        return !$p($x);
    };
}
