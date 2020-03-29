const net = require('net');

const serverPort = 3000;
const serverAddress = "localhost"

const client = net.createConnection(serverPort, serverAddress);


client.on('connect', () => {
    console.log(`Connected to the server`);

    client.write("Hello server")    
})


client.on('data', (data) => {
    const message = data.toString();
    console.log(`New message from server: \n`, message);
})

client.on('error', (error) => {
    console.error(error);
})