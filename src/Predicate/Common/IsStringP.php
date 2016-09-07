<?php

declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Predicate\Common;

use Predicate\Framework\Predicate;

/**
 * Predicate that all input arguments are string values
 *
 * @link http://php.net/manual/en/function.is-numeric.php is_numeric
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package predicate\Common
 * @since 1.0
 */
final class IsStringP implements Predicate
{
    /**
     * @inheritdoc
     */
    public function __invoke(...$args): bool
    {
        foreach ($args as $a) {
            if (false === is_string($a)) {
                return false;
            }
        }

        return true;
    }
}
