const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const children = [];

if (cluster.isMaster) {
    masterProcess();

} else {
    childProcess()
}


function masterProcess(){
    console.log(`Master ${process.pid} is running`);

    // Fork child process and starts listening to new messages from that child.
    for (let i = 0; i < numCPUs; i++) {
        const child = cluster.fork();
        children.push(child);

        child.on('message', (message) => {
            console.log(`Master received message from child ${child.process.pid}: \n`, message);
        })
    }

    // Sends a message to every child process
    children.forEach(w => {
        w.send({ message: `Hello my poor children`})
    })

}


function childProcess(){
    console.log(`Child ${process.pid} started`);

    // Listening to messages from master process
    process.on('message', (message) => {
        console.log(`Child ${process.pid} received a new message: \n`, message);
    })

    // Sends message to master process
    console.log(`Child ${process.pid} is sending a message to its master process...`);
    process.send({ message: `Hello my master, I'm child number   ${process.pid}` }) ;

    console.log(`Child  ${process.pid} finished`);
    
}