import test from 'ava'

/**
 * Unit under test
 */
import * as B from '../src'

test('magma sub should subtract two bigints', (t) => {
  t.deepEqual(B.magmaSub.concat(BigInt(2), BigInt(3)), BigInt(-1))
})
