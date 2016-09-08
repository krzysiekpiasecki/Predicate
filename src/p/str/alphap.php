<?php

declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace p\str;

/**
 * Predicate that x is an alpha string
 *
 * Example of usage:
 * <pre>
 * \p\str\alphap('qwerty'); // true
 * \p\str\alphap('1234gqwery'); // false
 * </pre>
 *
 * @link http://php.net/manual/en/function.ctype-alpha.php ctype_alpha
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package p
 * @since 1.0
 * @param mixed $x Predicate argument
 * @return bool May be true or false depending on the x argument
 */
function alphap(string $x): bool
{
    return ctype_alpha($x);
}
