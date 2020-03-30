const dgram = require('dgram');

const server = dgram.createSocket('udp4');

server.on('message', (data, sender) => {
    const message = data.toString();
    console.log(`New message from ${sender.address}:${sender.port}: \n`, message);
  });

server.on('error', (err) => {
    console.error(err);
    server.close();
});

server.on('listening', () => {
    const address = server.address();
    console.log(`Server listening on ${address.address}:${address.port}`);
});
  
server.bind(41234);