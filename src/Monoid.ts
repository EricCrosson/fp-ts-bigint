/**
 * `Monoid` extends the power of `Semigroup` by providing an additional `empty` value.
 *
 * ```ts
 * interface Semigroup<A> {
 *   readonly concat: (x: A, y: A) => A
 * }
 *
 * interface Monoid<A> extends Semigroup<A> {
 *   readonly empty: A
 * }
 * ```
 *
 * This `empty` value should be an identity for the `concat` operation, which means the following equalities hold for any choice of `x`.
 *
 * ```ts
 * concat(x, empty) = concat(empty, x) = x
 * ```
 *
 * Many types that form a `Semigroup` also form a `Monoid`, such as `number`s (with `0`) and `string`s (with `''`).
 *
 * ```ts
 * import { Monoid } from 'fp-ts/Monoid'
 *
 * const monoidString: Monoid<string> = {
 *   concat: (x, y) => x + y,
 *   empty: ''
 * }
 * ```
 *
 * *Adapted from https://typelevel.org/cats*
 *
 * @since 1.0.0
 */

import * as S from './Semigroup'
import { Monoid } from 'fp-ts/Monoid'

/**
 * `bigint` monoid under addition.
 *
 * The `empty` value is `BigInt(0)`.
 *
 * @example
 * import * as M from 'fp-ts-bigint/Monoid'
 *
 * assert.deepStrictEqual(M.monoidSumBigInt.concat(BigInt(2), BigInt(3)), BigInt(5))
 *
 * @category instances
 * @since 2.10.0
 */
export const monoidSumBigInt: Monoid<bigint> = {
  concat: S.semigroupSumBigInt.concat,
  empty: BigInt(0)
}

/**
 * `bigint` monoid under multiplication.
 *
 * The `empty` value is `BigInt(1)`.
 *
 * @example
 * import * as M from 'fp-ts-bigint/Monoid'
 *
 * assert.deepStrictEqual(M.monoidProductBigInt.concat(BigInt(2), BigInt(3)), BigInt(6))
 *
 * @category instances
 * @since 2.10.0
 */
export const monoidProductBigInt: Monoid<bigint> = {
  concat: S.semigroupProductBigInt.concat,
  empty: BigInt(1)
}
