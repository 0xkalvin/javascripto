const cluster = require('cluster');
const app = require('./app');
const setupWorkerProcesses = require('./worker');

const port = process.env.PORT || 3000;

function initServer(app, useCluster = true) {
    
    if(useCluster && cluster.isMaster){
        setupWorkerProcesses();
    } else {
        
        app.listen(port, () => {
            console.log(`Server is listening on ${port}`);
        })
    }
}

initServer(app, true);


