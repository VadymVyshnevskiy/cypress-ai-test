import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    projectId: "n3pcux",
    video: false,
    screenshotOnRunFailure: false,
    experimentalPromptCommand: true,
  },
});
