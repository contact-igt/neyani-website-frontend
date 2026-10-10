import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("Pterygium page includes the five-step examination journey", () => {
  const page = readFileSync("src/app/services/pterygium/page.tsx", "utf8");
  assert.match(page, /Your examination/);
  assert.match(page, /Symptom review/);
  assert.match(page, /Slit-lamp examination/);
  assert.match(page, /Vision \/ refraction check/);
  assert.match(page, /Corneal assessment/);
  assert.match(page, /Progression monitoring/);
});
