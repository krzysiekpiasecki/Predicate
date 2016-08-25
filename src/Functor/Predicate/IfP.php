<?php declare (strict_types = 1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Functor\Predicate;

/**
 * Composed predicate that represents if predicate
 *
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package Functor\Predicate
 * @since 1.0
 */
final class IfP implements PredicateInterface
{
    /**
     * @var PredicateInterface
     */
    private $predicate;

    /**
     * @var PredicateInterface
     */
    private $predicateTrue;

    /**
     * Composed predicate that represents if predicate
     *
     * @param PredicateInterface $predicate
     * @param PredicateInterface $predicateTrue
     */
    public function __construct(PredicateInterface $predicate, PredicateInterface $predicateTrue)
    {
        $this->predicate = $predicate;
        $this->predicateTrue = $predicateTrue;
    }

    /**
     * @inheritDoc
     */
    public function __invoke(...$subject): bool
    {
        return true === call_user_func_array($this->predicate, $subject)
            ? call_user_func_array($this->predicateTrue, $subject)
            : false;
    }
}
