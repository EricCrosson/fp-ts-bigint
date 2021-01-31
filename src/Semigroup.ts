/**
 * If a type `A` can form a `Semigroup` it has an **associative** binary operation.
 *
 * ```ts
 * interface Semigroup<A> {
 *   readonly concat: (x: A, y: A) => A
 * }
 * ```
 *
 * Associativity means the following equality must hold for any choice of `x`, `y`, and `z`.
 *
 * ```ts
 * concat(x, concat(y, z)) = concat(concat(x, y), z)
 * ```
 *
 * A common example of a semigroup is the type `string` with the operation `+`.
 *
 * ```ts
 * import { Semigroup } from 'fp-ts/Semigroup'
 *
 * const semigroupString: Semigroup<string> = {
 *   concat: (x, y) => x + y
 * }
 *
 * const x = 'x'
 * const y = 'y'
 * const z = 'z'
 *
 * semigroupString.concat(x, y) // 'xy'
 *
 * semigroupString.concat(x, semigroupString.concat(y, z)) // 'xyz'
 *
 * semigroupString.concat(semigroupString.concat(x, y), z) // 'xyz'
 * ```
 *
 * *Adapted from https://typelevel.org/cats*
 *
 * @since 1.0.0
 */

import { Semigroup } from 'fp-ts/Semigroup'

/**
 * `bigint` semigroup under addition.
 *
 * @example
 * import * as S from 'fp-ts-bigint/Semigroup'
 *
 * assert.deepStrictEqual(S.semigroupSumBigInt.concat(BigInt(2), BigInt(3)), BigInt(5))
 *
 * @category instances
 * @since 2.10.0
 */
export const semigroupSumBigInt: Semigroup<bigint> = {
  concat: (x, y) => x + y
}

/**
 * `bigint` semigroup under multiplication.
 *
 * @example
 * import * as S from 'fp-ts-bigint/Semigroup'
 *
 * assert.deepStrictEqual(S.semigroupProductBigInt.concat(BigInt(2), BigInt(3)), BigInt(6))
 *
 * @category instances
 * @since 2.10.0
 */
export const semigroupProductBigInt: Semigroup<bigint> = {
  concat: (x, y) => x * y
}
