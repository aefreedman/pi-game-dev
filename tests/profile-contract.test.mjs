import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { DefaultResourceLoader, SettingsManager } from "@earendil-works/pi-coding-agent";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const manifest = JSON.parse(readFileSync(path.join(root, "package.json"), "utf8"));

test("Pi loads the carrier extension without registering resources", async () => {
  assert.deepEqual(manifest.pi, { extensions: ["./dist/pi/index.js"] });

  const loader = new DefaultResourceLoader({
    cwd: root,
    agentDir: path.join(root, ".pi"),
    settingsManager: SettingsManager.inMemory({ packages: [root] }),
  });
  await loader.reload();

  const extensions = loader.getExtensions();
  assert.deepEqual(extensions.errors, []);
  assert.equal(extensions.extensions.length, 1);
  const [carrier] = extensions.extensions;
  assert(carrier);
  assert.equal(carrier.tools.size, 0);
  assert.equal(carrier.commands.size, 0);
  assert.equal(carrier.handlers.size, 0);
  assert.equal(carrier.flags.size, 0);
  assert.equal(carrier.shortcuts.size, 0);
  assert.deepEqual(loader.getSkills(), { skills: [], diagnostics: [] });
  assert.deepEqual(loader.getPrompts(), { prompts: [], diagnostics: [] });
  assert.deepEqual(loader.getThemes(), { themes: [], diagnostics: [] });
});
