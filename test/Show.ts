import test from "node:test";
import assert from "node:assert/strict";

import fc from "fast-check";

/**
 * `Unit under test
 */
import * as B from "../src";

test("should map bigint to a string", () => {
  fc.assert(
    fc.property(
      fc.bigInt(),

      (a) => assert.equal(B.Show.show(a), a.toString())
    ),
    {
      verbose: true,
      numRuns: 100,
      endOnFailure: true,
    }
  );
});
