import test from "node:test";
import assert from "node:assert/strict";

/**
 * Unit under test
 */
import * as B from "../src";

test("monoid sum should add two bigints", () => {
  assert.deepEqual(B.monoidSum.concat(BigInt(2), BigInt(3)), BigInt(5));
});

test("monoid sum should specify identity element as 0n", () => {
  assert.deepEqual(B.monoidSum.empty, BigInt(0));
});

test("monoid product should multiply two bigints", () => {
  assert.deepEqual(B.monoidProduct.concat(BigInt(2), BigInt(3)), BigInt(6));
});

test("monoid product should specify identity element as 1n", () => {
  assert.deepEqual(B.monoidProduct.empty, BigInt(1));
});
