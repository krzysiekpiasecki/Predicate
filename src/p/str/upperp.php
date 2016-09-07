<?php

declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace p\str;

/**
 * Predicate that x is an uppercase string
 *
 * Example of usage:
 * <pre>
 * \p\str\upperp('HELLO'); // true
 * \p\str\upperp('Hello'); // false
 * </pre>
 *
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package p
 * @since 1.0
 * @param string $x Predicate argument
 * @return bool May be true or false depending on the x argument
 */
function upperp(string $x): bool
{
    return ctype_upper($x);
}
