<?php declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Predicate\Framework;

/**
 * Predicate that represents the predicate only on float arguments
 *
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package Framework\Framework
 * @since 1.0
 */
final class FloatP implements Predicate
{
    /**
     * @var Predicate
     */
    private $predicate;

    /**
     * Predicate that represents the predicate only on float arguments
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
    public function __invoke(...$args): bool
    {
        foreach ($args as $s) {
            if (false === is_float($s)) {
                throw new \InvalidArgumentException(
                    'This predicate is only on float subject'
                );
            }
        }

        return call_user_func($this->predicate, ...$args);
    }
}
