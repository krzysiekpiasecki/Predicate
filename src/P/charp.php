<?php

declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace p;

/**
 * Predicate that x is a char
 *
 * Example of usage:
 * <pre>
 * \p\charp('H'); // true
 * \p\charp('Hello'); // false
 * </pre>
 *
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package p
 * @since 1.0
 * @param mixed $x Predicate argument
 * @return bool May be true or false depending on the x argument
 */
function charp($x): bool
{
    return true === is_string($x) && 1 === mb_strlen($x);
}
