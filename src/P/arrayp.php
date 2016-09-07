<?php

declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace p;

/**
 * Predicate that x is an array
 *
 * Example of usage:
 * <pre>
 * \p\arrayp([1, true]); // true
 * \p\arrayp(12.23); // false
 * </pre>
 *
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package P
 * @since 1.0
 * @param mixed $x Predicate argument
 * @return bool May be true or false depending on the x argument
 */
function arrayp($x): bool
{
    return is_array($x);
}
