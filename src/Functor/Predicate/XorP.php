<?php declare (strict_types = 1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Functor\Predicate;

/**
 * Composed predicate that represents a short-circuiting logical XOR of this predicate and another
 *
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package Functor\Predicate
 * @since 1.0
 */
final class XorP implements PredicateInterface
{

    /**
     * @var array
     */
    private $predicates;

    /**
     * XorP
     *
     * @param PredicateInterface $p1
     * @param PredicateInterface $p2
     * @param PredicateInterface[] ...$next
     */
    public function __construct(PredicateInterface $p1, PredicateInterface $p2, PredicateInterface ...$next)
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
        $result = intval(call_user_func_array($this->predicates[0], $subject));

        for ($i = 1, $l = count($this->predicates); $i < $l; ++$i) {
            $result = $result  ^ intval(call_user_func_array($this->predicates[$i], $subject));
        }

        return boolval($result);
    }
}
