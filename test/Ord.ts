import test from "node:test";
import assert from "node:assert/strict";

import fc from "fast-check";

/**
 * Unit under test
 */
import * as B from "../src";

test("should satisfy reflexivity", () => {
  fc.assert(
    fc.property(fc.bigInt(), (a) => assert(B.Ord.compare(a, a) <= 0)),
    {
      verbose: true,
      numRuns: 100,
      endOnFailure: true,
    }
  );
});

test("should satisfy antisymmetry", () => {
  fc.assert(
    fc.property(fc.bigInt(), fc.bigInt(), (a, b) => {
      if (B.Ord.compare(a, b) <= 0 && B.Ord.compare(b, a) <= 0) {
        assert(B.Ord.equals(a, b));
      } else {
        assert(!B.Ord.equals(a, b));
      }
    }),
    {
      verbose: true,
      numRuns: 1000,
      endOnFailure: true,
    }
  );
});

test("should satisfy transitivity", () => {
  fc.assert(
    fc.property(fc.bigInt(), fc.bigInt(), fc.bigInt(), (a, b, c) => {
      if (B.Ord.compare(a, b) <= 0 && B.Ord.compare(b, c) <= 0) {
        assert(B.Ord.compare(a, c) <= 0);
      } else {
        // no assertion to be done here
      }
    }),
    {
      verbose: true,
      numRuns: 1000,
      endOnFailure: true,
    }
  );
});
