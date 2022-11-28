import test from "node:test";
import assert from "node:assert/strict";

/**
 * Unit under test
 */
import * as B from "../src";

test("semigroup sum should add two bigints", () => {
  assert.deepEqual(B.semigroupSum.concat(BigInt(2), BigInt(3)), BigInt(5));
});

test("semigroup product should multiply two bigints", () => {
  assert.deepEqual(B.semigroupProduct.concat(BigInt(2), BigInt(3)), BigInt(6));
});
