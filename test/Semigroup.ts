import test from 'ava'

/**
 * Unit under test
 */
import * as B from '../src'

test('semigroup sum should add two bigints', (t) => {
  t.deepEqual(B.semigroupSum.concat(BigInt(2), BigInt(3)), BigInt(5))
})

test('semigroup product should multiply two bigints', (t) => {
  t.deepEqual(B.semigroupProduct.concat(BigInt(2), BigInt(3)), BigInt(6))
})
