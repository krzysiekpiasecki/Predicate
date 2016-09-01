<?php declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Predicate\Framework;

/**
 * Predicate that represents the result of external callable predicate
 *
 * Any external callable must return strictly boolean value otherwise it throws an exception.
 *
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package Framework\Framework
 * @since 1.0
 */
final class InvokeP implements Predicate
{
    /**
     * @var callable
     */
    private $callable;

    /**
     * Predicate that represents the result of external callable predicate
     *
     * @param callable $callable
     */
    public function __construct(callable $callable)
    {
        $this->callable = $callable;
    }


    /**
     * @inheritdoc
     */
    public function __invoke(...$args): bool
    {
        $result = call_user_func_array($this->callable, $args);

        if (false === is_bool($result)) {
            throw new \RuntimeException(
                'External callable must return a boolean value'
            );
        }

        return $result;
    }
}
