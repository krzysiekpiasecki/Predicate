<?php declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Functor\Predicate;

/**
 * Predicate that represents the predicate only on float arguments
 *
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package Functor\Predicate
 * @since 1.0
 */
final class FloatP implements PredicateInterface
{
    /**
     * @var PredicateInterface
     */
    private $predicate;

    /**
     * Predicate that represents the predicate only on float arguments
     *
     * @param PredicateInterface $predicate
     */
    public function __construct(PredicateInterface $predicate)
    {
        $this->predicate = $predicate;
    }

    /**
     * @inheritdoc
     */
    public function __invoke(...$subject): bool
    {
        foreach ($subject as $s) {
            if (false === is_float($s)) {
                throw new \InvalidArgumentException(
                    'This predicate is only on float subject'
                );
            }
        }

        return call_user_func($this->predicate, ...$subject);
    }
}
