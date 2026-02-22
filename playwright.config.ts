import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

const envFile = process.env.TEST_ENV
  ? `.env.${process.env.TEST_ENV}`
  : '.env';

dotenv.config({ path: path.resolve(__dirname, envFile) });

export default defineConfig({
  use: {
    baseURL: 'https://dailyfinance.roadtocareer.net',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
  testDir: './tests'
});