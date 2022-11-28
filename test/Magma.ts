import test from "node:test";
import assert from "node:assert/strict";

/**
 * Unit under test
 */
import * as B from "../src";

test("magma sub should subtract two bigints", () => {
  assert.deepEqual(B.magmaSub.concat(BigInt(2), BigInt(3)), BigInt(-1));
});
