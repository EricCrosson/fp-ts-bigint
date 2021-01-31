import test from 'ava'

/**
 * Unit under test
 */
import * as S from '../../src/Semigroup'

test('semigroup sum should add two bigints', (t) => {
  t.deepEqual(S.semigroupSumBigInt.concat(BigInt(2), BigInt(3)), BigInt(5))
})

test('semigroup product should multiply two bigints', (t) => {
  t.deepEqual(S.semigroupProductBigInt.concat(BigInt(2), BigInt(3)), BigInt(6))
})
