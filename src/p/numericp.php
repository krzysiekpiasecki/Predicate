<?php

declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace p;

/**
 * Predicate that x is a numeric value
 *
 * Example of usage:
 * <pre>
 * \p\numericp('123.23'); // true
 * \p\numericp('0xfff'); // true
 * \p\numericp(1); // true
 * \p\numericp(1.22); // true
 * \p\numericp('a1000'); // false
 * </pre>
 *
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package p
 * @since 1.0
 * @param mixed $x Predicate argument
 * @return bool May be true or false depending on the x argument
 */
function numericp($x): bool
{
    return is_numeric($x);
}
