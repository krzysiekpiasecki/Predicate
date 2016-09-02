<?php

declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Predicate\Common;

use Predicate\Framework\Predicate;

/**
 * Predicate that all input arguments are strictly equal to a given argument
 *
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package Predicate\Common
 * @since 1.0
 */
final class IsStrictEqualToP implements Predicate
{
    /**
     * All input arguments are compare for strict equality to this argument
     *
     * @var mixed Argument to compare for strict equality
     */
    private $arg;

    /**
     * New instance of this predicate
     *
     * @param mixed $arg
     */
    public function __construct($arg = null)
    {
        $this->arg = $arg;
    }

    /**
     * @inheritdoc
     */
    public function __invoke(...$args): bool
    {
        $target = $this->arg;

        if (0 === count($args)) {
            return $target === null;
        }


        for ($i = 0; $i < count($args); ++$i) {
            $x = $args[$i];
            if ($target !== $x) {
                return false;
            }
        }

        return true;
    }
}
