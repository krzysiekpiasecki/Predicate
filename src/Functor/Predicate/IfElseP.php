<?php declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Functor\Predicate;

/**
 * Composed predicate that represents if/else predicate
 *
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package Functor\Predicate
 * @since 1.0
 */
final class IfElseP implements Predicate
{
    /**
     * @var Predicate
     */
    private $predicate;

    /**
     * @var Predicate
     */
    private $predicateTrue;

    /**
     * @var Predicate
     */
    private $predicateFalse;

    /**
     * Composed predicate that represents if/else predicate
     *
     * @param Predicate $predicate
     * @param Predicate $predicateTrue
     * @param Predicate $predicateFalse
     */
    public function __construct(Predicate $predicate, Predicate $predicateTrue, Predicate $predicateFalse)
    {
        $this->predicate = $predicate;
        $this->predicateTrue = $predicateTrue;
        $this->predicateFalse = $predicateFalse;
    }

    /**
     * @inheritDoc
     */
    public function __invoke(...$subject): bool
    {
        return true === call_user_func_array($this->predicate, $subject)
            ? call_user_func_array($this->predicateTrue, $subject)
            : call_user_func_array($this->predicateFalse, $subject);
    }
}
