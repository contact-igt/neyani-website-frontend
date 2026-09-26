import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("General Eye Care links to its page route", () => {
  const header = readFileSync("src/components/Header/Header.tsx", "utf8");
  assert.match(header, /"general"\].*`\/services\/\$\{id\}`/s);
});
