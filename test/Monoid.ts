import test from 'ava'

/**
 * Unit under test
 */
import * as B from '../src'

test('monoid sum should add two bigints', (t) => {
  t.deepEqual(B.monoidSum.concat(BigInt(2), BigInt(3)), BigInt(5))
})

test('monoid sum should specify identity element as 0n', (t) => {
  t.deepEqual(B.monoidSum.empty, BigInt(0))
})

test('monoid product should multiply two bigints', (t) => {
  t.deepEqual(B.monoidProduct.concat(BigInt(2), BigInt(3)), BigInt(6))
})

test('monoid product should specify identity element as 1n', (t) => {
  t.deepEqual(B.monoidProduct.empty, BigInt(1))
})
