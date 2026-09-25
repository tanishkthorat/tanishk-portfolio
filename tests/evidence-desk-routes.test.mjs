import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { after, before, test } from "node:test";

const port = 3217;
const baseUrl = `http://127.0.0.1:${port}`;
let server;

async function waitForServer() {
  const deadline = Date.now() + 30_000;

  while (Date.now() < deadline) {
    try {
      const response = await fetch(baseUrl);
      if (response.ok) return;
    } catch {
      // The development server is still starting.
    }
    await new Promise((resolve) => setTimeout(resolve, 250));
  }

  throw new Error("Next.js development server did not start within 30 seconds");
}

before(async () => {
  server = spawn(
    process.execPath,
    [
      "node_modules/next/dist/bin/next",
      "dev",
      "--hostname",
      "127.0.0.1",
      "--port",
      String(port),
    ],
    { cwd: process.cwd(), stdio: "ignore" },
  );
  await waitForServer();
});

after(() => {
  server?.kill();
});

test("Evidence Desk is published as a discoverable case study", async () => {
  const [homeResponse, indexResponse, caseStudyResponse] = await Promise.all([
    fetch(baseUrl),
    fetch(`${baseUrl}/case-studies`),
    fetch(`${baseUrl}/case-studies/evidence-desk`),
  ]);

  assert.equal(caseStudyResponse.status, 200);

  const [home, index, caseStudy] = await Promise.all([
    homeResponse.text(),
    indexResponse.text(),
    caseStudyResponse.text(),
  ]);

  const route = 'href="/case-studies/evidence-desk"';
  assert.match(home, new RegExp(route));
  assert.match(index, new RegExp(route));
  assert.match(caseStudy, /<h1[^>]*>Evidence Desk<\/h1>/);
  assert.match(caseStudy, /accurate, accountable journalism/i);
});
