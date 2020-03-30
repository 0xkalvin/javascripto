const cluster = require('cluster');

const setupWorkerProcesses = () => {

    const coresNumber = require('os').cpus().length;
    console.info(`Host has ${coresNumber} cores available`);

    for(let i = 0; i < coresNumber; i++){
        cluster.fork();
    }

    cluster.on('online', (worker) => {
        console.log(`Worker ${worker.process.pid} is ready`);
    })

    cluster.on('exit', (worker, code, signal) => {
        console.info(`Worker ${worker.process.pid} died with code ${code} and signal ${signal}`);
        cluster.fork();
    })
}


module.exports = setupWorkerProcesses;