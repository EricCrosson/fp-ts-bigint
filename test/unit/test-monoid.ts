import test from 'ava'

/**
 * Unit under test
 */
import * as S from '../../src/Monoid'

test('monoid sum should add two bigints', (t) => {
  t.deepEqual(S.monoidSumBigInt.concat(BigInt(2), BigInt(3)), BigInt(5))
})

test('monoid sum should specify identity element as 0n', (t) => {
  t.deepEqual(S.monoidSumBigInt.empty, BigInt(0))
})

test('monoid product should multiply two bigints', (t) => {
  t.deepEqual(S.monoidProductBigInt.concat(BigInt(2), BigInt(3)), BigInt(6))
})

test('monoid product should specify identity element as 1n', (t) => {
  t.deepEqual(S.monoidProductBigInt.empty, BigInt(1))
})
