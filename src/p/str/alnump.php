<?php

declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace p\str;

/**
 * Predicate that x is an alphanumeric string
 *
 * Example of usage:
 * <pre>
 * \p\str\alnum('qwerty1234567890'); // true
 * \p\str\alnum('Grzegrzółka2345890345'); // false
 * </pre>
 *
 * @link http://php.net/manual/en/function.ctype-alnum.php ctype_alnum
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package p
 * @since 1.0
 * @param mixed $x Predicate argument
 * @return bool May be true or false depending on the x argument
 */
function alnump(string $x): bool
{
    return ctype_alnum($x);
}
