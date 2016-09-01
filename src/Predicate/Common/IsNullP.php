<?php

declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Predicate\Common;

use Predicate\Framework\Predicate;

/**
 * Predicate that all input arguments are null values
 *
 * @link http://php.net/manual/en/function.is-null.php is_null
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package Predicate\Common
 * @since 1.0
 */
final class IsNullP implements Predicate
{
    /**
     * @inheritdoc
     */
    public function __invoke(...$args): bool
    {
        foreach ($args as $a) {
            if (null !== $a) {
                return false;
            }
        }

        return true;
    }
}
