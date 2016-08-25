<?php declare (strict_types = 1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Functor;

/**
 * Predicate that represents the predicate only on int arguments
 *
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package Functor\Predicate
 * @since 1.0
 */
final class IntP implements PredicateInterface
{
    /**
     * @var PredicateInterface
     */
    private $predicate;

    /**
     * Predicate that represents the predicate only on int arguments
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
            if (false === is_int($s)) {
                throw new \InvalidArgumentException(
                    'This predicate is only on int subject'
                );
            }
        }

        return call_user_func($this->predicate, ...$subject);
    }
}
