import test from "node:test";
import assert from "node:assert/strict";

import fc from "fast-check";

/**
 * Unit under test
 */
import * as B from "../src";

test("should satisfy reflexivity", () => {
  fc.assert(fc.property(fc.bigInt(), (a) => assert(B.Eq.equals(a, a)))),
    {
      verbose: true,
      numRuns: 100,
      endOnFailure: true,
    };
});

test("should satisfy symmetry", () => {
  fc.assert(
    fc.property(fc.bigInt(), fc.bigInt(), (a, b) =>
      assert.equal(B.Eq.equals(a, b), B.Eq.equals(b, a))
    )
  ),
    {
      verbose: true,
      numRuns: 100,
      endOnFailure: true,
    };
});

test("should satisfy transivity", () => {
  fc.assert(
    fc.property(fc.bigInt(), fc.bigInt(), fc.bigInt(), (a, b, c) => {
      if (B.Eq.equals(a, b) && B.Eq.equals(b, c)) {
        assert(B.Eq.equals(a, c));
      } else {
        assert(!B.Eq.equals(a, c));
      }
    }),
    {
      verbose: true,
      numRuns: 100,
      endOnFailure: true,
    }
  );
});
