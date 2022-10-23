/**
 * @since 2.0.0
 */
import * as E from 'fp-ts/Eq'
import * as O from 'fp-ts/Ord'
import * as S from 'fp-ts/Show'
import { Semigroup } from 'fp-ts/Semigroup'
import { Magma } from 'fp-ts/Magma'
import { Monoid } from 'fp-ts/Monoid'

/**
 * @category instances
 * @since 2.0.0
 */
export const Eq: E.Eq<bigint> = E.eqStrict

/**
 * @category instances
 * @since 2.0.0
 */
export const Ord: O.Ord<bigint> = {
  equals: Eq.equals,
  compare: (x, y) => (x < y ? -1 : x > y ? 1 : 0)
}

/**
 * @category instances
 * @since 2.0.0
 */
export const Show: S.Show<bigint> = {
  show: (a) => a.toString()
}

/**
 * `bigint` semigroup under addition.
 *
 * @example
 * import * as B from 'fp-ts-bigint'
 *
 * assert.deepStrictEqual(B.semigroupSum.concat(BigInt(2), BigInt(3)), BigInt(5))
 *
 * @category instances
 * @since 2.0.0
 */
export const semigroupSum: Semigroup<bigint> = {
  concat: (x, y) => x + y
}

/**
 * `bigint` semigroup under multiplication.
 *
 * @example
 * import * as B from 'fp-ts-bigint'
 *
 * assert.deepStrictEqual(B.semigroupProduct.concat(BigInt(2), BigInt(3)), BigInt(6))
 *
 * @category instances
 * @since 2.0.0
 */
export const semigroupProduct: Semigroup<bigint> = {
  concat: (x, y) => x * y
}

/**
 * `bigint` magma under subtraction.
 *
 * @example
 * import * as B from 'fp-ts-bigint'
 *
 * assert.deepStrictEqual(B.magmaSub.concat(BigInt(5), BigInt(3)), BigInt(2))
 *
 * @category instances
 * @since 2.0.0
 */
export const magmaSub: Magma<bigint> = {
  concat: (x, y) => x - y
}

/**
 * `bigint` monoid under addition.
 *
 * The `empty` value is `BigInt(0)`.
 *
 * @example
 * import * as B from 'fp-ts-bigint'
 *
 * assert.deepStrictEqual(B.monoidSum.concat(BigInt(2), BigInt(3)), BigInt(5))
 *
 * @category instances
 * @since 2.0.0
 */
export const monoidSum: Monoid<bigint> = {
  concat: semigroupSum.concat,
  empty: BigInt(0)
}

/**
 * `bigint` monoid under multiplication.
 *
 * The `empty` value is `BigInt(1)`.
 *
 * @example
 * import * as B from 'fp-ts-bigint'
 *
 * assert.deepStrictEqual(B.monoidProduct.concat(BigInt(2), BigInt(3)), BigInt(6))
 *
 * @category instances
 * @since 2.0.0
 */
export const monoidProduct: Monoid<bigint> = {
  concat: semigroupProduct.concat,
  empty: BigInt(1)
}
