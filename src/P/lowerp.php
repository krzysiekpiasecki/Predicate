<?php

declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace P;

/**
 * Predicate that x is a lowercase string value
 *
 * Example of usage:
 * <pre>
 * \P\lowerp('hello'); // true
 * \P\lowerp('Hello'); // false
 * </pre>
 *
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package P
 * @since 1.0
 * @param string $x Predicate argument
 * @return bool May be true or false depending on the x argument
 */
function lowerp(string $x): bool
{
    return ctype_lower($x);
}
