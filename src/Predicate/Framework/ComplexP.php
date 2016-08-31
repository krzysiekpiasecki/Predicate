<?php declare(strict_types=1);

/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Predicate\Framework;

/**
 * Composed predicate that represents a complex predicate statement
 *
 * @author Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 * @package Framework\Framework
 * @since 1.0
 */
final class ComplexP implements Predicate
{
    /**
     * @var Predicate
     */
    private $complex;

    /**
     * Composed predicate that represents a complex predicate statement
     *
     * @param Predicate $complex
     */
    public function __construct(Predicate $complex)
    {
        $this->complex = $complex;
    }

    /**
     * @inheritdoc
     */
    public function andP(Predicate ...$pr): ComplexP
    {
        return new ComplexP(
            new AndP(
                $this->complex,
                ...$pr
            )
        );
    }

    /**
     * @inheritdoc
     */
    public function orP(Predicate ...$pr): ComplexP
    {
        return new ComplexP(
            new OrP(
                $this->complex,
                ...$pr
            )
        );
    }

    /**
     * @inheritdoc
     */
    public function negate(): ComplexP
    {
        return new ComplexP(
            new NotP(
                $this->complex
            )
        );
    }

    /**
     * @inheritdoc
     */
    public function __invoke(...$subject): bool
    {
        return call_user_func_array($this->complex, $subject);
    }
}
