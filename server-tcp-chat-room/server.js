const net = require('net');

const port = 3000;
const clients = []
let clientsCounter = 0

const server = net.createServer();

server.on('connection', (socket) => {
    
    clients.push(socket);
    clientsCounter++;
    
    console.log(`Client ${clientsCounter} has connected coming from ${socket.remoteAddress}`);
    broadcast(`Client ${clientsCounter} has enter the chat`, socket);

    socket.on('data', (data) => {
        broadcast(`Client ${clientsCounter}: ` + data, socket);
    })

    socket.on('error', (error) => {
        console.error(error);
    })

})

server.on('close', () => {
    console.log("Server disconnected");
})


server.on('error', (error) => {
    console.error(error);
})


server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})

function broadcast(message, sender){
    clients.forEach(c => {
        if(c != sender){
            c.write(message)
        }
    })  
}
