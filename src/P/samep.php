<?php

declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace P;

/**
 * Predicate that both arguments are strictly equal.
 *
 * Example of usage:
 * <pre>
 * \P\samep(1, 1); // true
 * \P\samep(1, '1'); // false
 * </pre>
 *
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package P
 * @since 1.0
 * @param mixed $x Predicate argument
 * @param mixed $y The other argument
 * @return bool May be true or false depending on the x and y arguments
 */
function samep($x, $y): bool
{
    return $x === $y;
}
