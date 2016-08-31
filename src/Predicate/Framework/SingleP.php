<?php declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Predicate\Framework;

/**
 * Predicate that represents the predicate on single argument
 *
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package Framework\Framework
 * @since 1.0
 */
final class SingleP implements Predicate
{
    /**
     * @var Predicate
     */
    private $predicate;

    /**
     * Predicate that represents the predicate on single argument
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
        if (1 !== count($subject)) {
            throw new \BadMethodCallException(
                'This is the predicate of one subject'
            );
        }

        return call_user_func_array($this->predicate, $subject);
    }
}
