import { testProp } from 'ava-fast-check'
import fc from 'fast-check'

/**
 * Unit under test
 */
import * as B from '../src'

testProp('should satisfy reflexivity', [fc.bigInt()], (t, a) => t.true(B.Ord.compare(a, a) <= 0), {
  verbose: true,
  numRuns: 100,
  endOnFailure: true
})

testProp(
  'should satisfy antisymmetry',
  [fc.bigInt(), fc.bigInt()],
  (t, a, b) => {
    if (B.Ord.compare(a, b) <= 0 && B.Ord.compare(b, a) <= 0) {
      t.true(B.Ord.equals(a, b))
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

testProp(
  'should satisfy transitivity',
  [fc.bigInt(), fc.bigInt(), fc.bigInt()],
  (t, a, b, c) => {
    if (B.Ord.compare(a, b) <= 0 && B.Ord.compare(b, c) <= 0) {
      t.true(B.Ord.compare(a, c) <= 0)
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
