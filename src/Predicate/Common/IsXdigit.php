<?php

declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Predicate\Common;

use Predicate\Framework\Predicate;

/**
 * Predicate that all input arguments contains only hexadecimal characters
 *
 * @link http://php.net/manual/en/function.ctype-lower.php ctype_xdigit
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package Predicate\Common
 * @since 1.0
 */
final class IsXdigit implements Predicate
{
    /**
     * @inheritdoc
     */
    public function __invoke(...$args): bool
    {
        return ctype_xdigit(implode('', $args));
    }
}
