<?php declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Functor\Predicate;

/**
 * A functional predicate that may be true or false
 *
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package Functor\Predicate
 * @since 1.0
 */
interface Predicate
{
    /**
     * Invokes a predicate on the subjects and returns the result that may be true or false
     * depending on the predicate subjects
     *
     * @param mixed ...$subject A predicate subjects
     * @return bool May be true or false depending on the predicate subject
     * @throws \InvalidArgumentException Invalid type of predicate subject
     * @throws \BadMethodCallException Invalid count of predicate subjects
     * @throws \RuntimeException The other exceptions
     */
    public function __invoke(...$subject): bool;
}
