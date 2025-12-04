import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    projectId: "rb8f1i",
    video: false,
    screenshotOnRunFailure: false,
    experimentalPromptCommand: true,
  },
});
