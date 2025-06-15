import { waitForPortOpen } from '@nx/node/utils';
import { exec } from 'child_process';
/* eslint-disable */
var __TEARDOWN_MESSAGE__: string;

module.exports = async function () {
  try {
    // Start services that that the app needs to run (e.g. database, docker-compose, etc.).
    console.log('\nSetting up...\n');
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const host = process.env.HOST ?? 'localhost';
    const port = process.env.PORT ? Number(process.env.PORT) : 3000;

    console.log(`Starting the service on ${host}:${port}...`);
    const serveProcess = exec('npx nx serve jobber-auth');
    await waitForPortOpen(port, { host });

    // Hint: Use `globalThis` to pass variables to global teardown.
    globalThis.__SERVE_PROCESS__ = serveProcess;
    globalThis.__TEARDOWN_MESSAGE__ = '\nTearing down...\n';
  } catch (error) {
    console.error('Error during global setup:', error);
    throw error;
  }
};
