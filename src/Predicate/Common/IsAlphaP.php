<?php

declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Predicate\Common;

use Predicate\Framework\Predicate;

/**
 * Predicate that all input arguments are alphabetics strings
 *
 * @link http://php.net/manual/en/function.ctype-alpha.php ctype_alpha
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package predicate\Common
 * @since 1.0
 */
final class IsAlphaP implements Predicate
{
    /**
     * @inheritdoc
     */
    public function __invoke(...$args): bool
    {
        return ctype_alpha(implode('', $args));
    }
}
