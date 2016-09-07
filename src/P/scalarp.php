<?php

declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace p;

/**
 * Predicate that x is a scalar
 *
 * Example of usage:
 * <pre>
 * \p\scalarp('Hello World!'); // true
 * \p\scalarp([1,2,true]); // false
 * </pre>
 *
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package P
 * @since 1.0
 * @param mixed $x Predicate argument
 * @return bool May be true or false depending on the x argument
 */
function scalarp($x): bool
{
    return is_scalar($x);
}
