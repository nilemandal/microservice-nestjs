import { killPort } from '@nx/node/utils';
/* eslint-disable */

module.exports = async function () {
  try {
    // Put clean up logic here (e.g. stopping services, docker-compose, etc.).
    // Hint: `globalThis` is shared between setup and teardown.
    
    if (globalThis.__SERVE_PROCESS__) {
      console.log('Stopping the service...');
      globalThis.__SERVE_PROCESS__.kill('SIGINT');
      console.log('Service stopped.');
    }

    const port = process.env.PORT ? Number(process.env.PORT) : 3000;
    await killPort(port);
    console.log(globalThis.__TEARDOWN_MESSAGE__);
  } catch (error) {
    console.error('Error during global teardown:', error);
    throw error;
  }
};
