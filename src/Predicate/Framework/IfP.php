<?php declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Predicate\Framework;

/**
 * Composed predicate that represents if predicate
 *
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package Framework\Framework
 * @since 1.0
 */
final class IfP implements Predicate
{
    /**
     * @var Predicate
     */
    private $predicate;

    /**
     * @var Predicate
     */
    private $predicateTrue;

    /**
     * Composed predicate that represents if predicate
     *
     * @param Predicate $predicate
     * @param Predicate $predicateTrue
     */
    public function __construct(Predicate $predicate, Predicate $predicateTrue)
    {
        $this->predicate = $predicate;
        $this->predicateTrue = $predicateTrue;
    }

    /**
     * @inheritDoc
     */
    public function __invoke(...$subject): bool
    {
        return true === call_user_func_array($this->predicate, $subject)
            ? call_user_func_array($this->predicateTrue, $subject)
            : false;
    }
}
