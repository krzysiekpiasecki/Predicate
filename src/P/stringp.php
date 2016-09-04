<?php

declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace P;

/**
 * Predicate that x is a string value
 *
 * Example of usage:
 * <pre>
 * \P\stringp('Hello World!'); // true
 * \P\intp(1.22); // false
 * </pre>
 *
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package P
 * @since 1.0
 * @param mixed $x Predicate argument
 * @return bool May be true or false depending on the x argument
 */
function stringp($x): bool
{
    return is_string($x);
}