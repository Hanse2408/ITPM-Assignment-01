// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,

  /* --- MODIFIED SECTION STARTS HERE --- */
  /* Reporter to use. We use two reporters:
     1. 'list': Shows test progress in your terminal/console.
     2. 'html': Generates a visual report and opens it automatically. */
  reporter: [
    ['list'], 
    ['html', { open: 'always' }] 
  ],
  /* --- MODIFIED SECTION ENDS HERE --- */

  /* Shared settings for all the projects below. */
  use: {
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    /* Capture a screenshot if a test fails (useful for the report) */
    screenshot: 'only-on-failure',
    /* Record video if a test fails (useful for the report) */
    video: 'retain-on-failure',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});