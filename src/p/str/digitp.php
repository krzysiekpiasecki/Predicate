<?php

declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace p\str;

/**
 * Predicate that x is a string containing only digits characters
 *
 * Example of usage:
 * <pre>
 * \p\str\digitp('1234567890'); // true
 * \p\str\digitp('1234567890digit'); // false
 * </pre>
 *
 * @link http://php.net/manual/en/function.ctype-digit.php ctype_digit
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package p
 * @since 1.0
 * @param mixed $x Predicate argument
 * @return bool May be true or false depending on the x argument
 */
function digitp(string $x): bool
{
    return ctype_digit($x);
}
