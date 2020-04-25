const {
	Worker,
	isMainThread,
	parentPort,
	workerData,
} = require('worker_threads');

// get numbers
const numbers = workerData;

const result = 0;

// return result
parentPort.postMessage(parse(script));
