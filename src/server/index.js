

/* eslint-disable no-console */
// index.js
// run with node --experimental-worker index.js on Node.js 10.x
const { Worker } = require('worker_threads');


function runService(workerData) {
	return new Promise((resolve, reject) => {
		// eslint-disable-next-line no-constant-condition
		for (let i = 0; i < 20; i++) {
			const worker = new Worker('./service.js', { workerData });
			console.log('worker created');
			worker.on('message', resolve);
			worker.on('error', reject);
			worker.on('exit', (code) => {
				if (code !== 0) reject(new Error(`Worker stopped with exit code ${code}`));
			});
		}
	});
}


(async () => {
	try {
		const result = await runService('world');
		console.log(result);

		process.on('warning', e => console.log(e));
	} catch (error) {
		console.log(error);
	}
})();
