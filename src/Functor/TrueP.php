<?php declare (strict_types = 1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Functor;

/**
 * Opaque predicate that is always true
 *
 * This predicate evaluates containing predicate but always returns a true result.
 *
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package Functor\Predicate
 * @since 1.0
 */
final class TrueP implements PredicateInterface
{
    /**
     * @var PredicateInterface
     */
    private $predicate;

    /**
     * @param PredicateInterface $predicate
     */
    public function __construct(PredicateInterface $predicate = null)
    {
        $this->predicate = $predicate;
    }

    /**
     * @inheritdoc
     */
    public function __invoke(...$subject): bool
    {
        if ($this->predicate !== null) {
            call_user_func_array($this->predicate, $subject);
        }

        return true;
    }
}
