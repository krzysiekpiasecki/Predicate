<?php declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Predicate\Framework;

/**
 * Composed predicate that represents a short-circuiting logical XOR of this predicate and another
 *
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package Framework\Framework
 * @since 1.0
 */
final class XorP implements Predicate
{

    /**
     * @var array
     */
    private $predicates;

    /**
     * XorP
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
        $result = intval(call_user_func_array($this->predicates[0], $subject));

        for ($i = 1, $l = count($this->predicates); $i < $l; ++$i) {
            $result = $result  ^ intval(call_user_func_array($this->predicates[$i], $subject));
        }

        return boolval($result);
    }
}
