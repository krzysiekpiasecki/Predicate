<?php declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Predicate\Framework;

/**
 * Composed predicate that represents the short-circuiting logical OR of this predicate and another
 *
 * When evaluating the composed predicate, if this predicate is true, then the other predicate is not evaluated.
 * Any exceptions thrown during evaluation of either predicate are relayed to the caller.
 *
 * If evaluation of this predicate throws an exception, the other predicate will not be evaluated.
 *
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package Framework\Framework
 * @since 1.0
 */
final class OrP implements Predicate
{

    /**
     * @var array
     */
    private $predicates;

    /**
     * Composed predicate that represents the short-circuiting logical OR of this predicate and the
     * other predicates
     *
     * @param Predicate $p1
     * @param Predicate $p2
     * @param Predicate[] ...$next
     */
    public function __construct(Predicate $p1, Predicate $p2, Predicate ...$next)
    {
        $this->predicates = array_merge(
            [$p1, $p2],
            $next
        );
    }

    /**
     * @inheritdoc
     */
    public function __invoke(...$subject): bool
    {
        foreach ($this->predicates as $predicate) {
            if (true === $predicate(...$subject)) {
                return true;
            }
        }

        return false;
    }
}
