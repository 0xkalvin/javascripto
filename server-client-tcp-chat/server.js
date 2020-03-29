const net = require('net');

const port = 3000;

const server = net.createServer();

server.on('connection', (socket) => {
    
    console.log("Client connected: ", socket.localAddress);

    socket.on('data', (data) => {
        const message = data.toString();
        console.log(`New message from client: \n`, message);

        const response = `Hey client ${socket.remoteAddress}`
        socket.write(Buffer.from(response))
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