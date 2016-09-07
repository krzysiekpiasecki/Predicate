<?php

declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace p\num;

/**
 * Predicate that x is an even number
 *
 * Example of usage:
 * <pre>
 * \p\evenp(2); // true
 * \p\evenp(3); // false
 * </pre>
 *
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package p
 * @since 1.0
 * @param mixed $x Predicate argument
 * @return bool May be true or false depending on the x argument
 */
function evenp(int $x): bool
{
    return 0 === ($x % 2);
}
