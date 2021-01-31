import { testProp } from 'ava-fast-check'
import fc from 'fast-check'

/**
 * `Unit under test
 */
import * as B from '../src'

testProp('should map bigint to a string', [fc.bigInt()], (t, a) => t.deepEqual(B.Show.show(a), a.toString()), {
  verbose: true,
  numRuns: 100,
  endOnFailure: true
})
