import { testProp } from 'ava-fast-check'
import fc from 'fast-check'

/**
 * Unit under test
 */
import * as B from '../src'

testProp('should satisfy reflexivity', [fc.bigInt()], (t, a) => t.true(B.Eq.equals(a, a)), {
  verbose: true,
  numRuns: 100,
  endOnFailure: true
})

testProp(
  'should satisfy symmetry',
  [fc.bigInt(), fc.bigInt()],
  (t, a, b) => t.deepEqual(B.Eq.equals(a, b), B.Eq.equals(b, a)),
  {
    verbose: true,
    numRuns: 1000,
    endOnFailure: true
  }
)

testProp(
  'should satisfy transitivity',
  [fc.bigInt(), fc.bigInt(), fc.bigInt()],
  (t, a, b, c) => {
    if (B.Eq.equals(a, b) && B.Eq.equals(b, c)) {
      t.true(B.Eq.equals(a, c))
    } else {
      t.pass()
    }
  },
  {
    verbose: true,
    numRuns: 1000,
    endOnFailure: true
  }
)
