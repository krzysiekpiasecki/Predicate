<?php

declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace p\num;

/**
 * Predicate that x is an odd number
 *
 * Example of usage:
 * <pre>
 * \p\oddp(3); // true
 * \p\oddp(2); // false
 * </pre>
 *
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package p
 * @since 1.0
 * @param mixed $x Predicate argument
 * @return bool May be true or false depending on the x argument
 */
function oddp(int $x): bool
{
    return 0 !== ($x % 2);
}
