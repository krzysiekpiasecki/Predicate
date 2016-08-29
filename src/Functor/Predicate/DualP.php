<?php declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Functor\Predicate;

/**
 * Predicate that represents the predicate on two arguments
 *
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package Functor\Predicate
 * @since 1.0
 */
final class DualP implements Predicate
{
    /**
     * @var Predicate
     */
    private $predicate;

    /**
     * Predicate that represents the predicate on two arguments
     *
     * @param Predicate $predicate
     */
    public function __construct(Predicate $predicate)
    {
        $this->predicate = $predicate;
    }

    /**
     * @inheritdoc
     */
    public function __invoke(...$subject): bool
    {
        if (2 !== count($subject)) {
            throw new \BadMethodCallException(
                'This is the predicate of two subjects'
            );
        }

        return call_user_func_array($this->predicate, $subject);
    }
}
