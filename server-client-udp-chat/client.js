const dgram = require('dgram');

const client = dgram.createSocket('udp4');

const messageToServer = Buffer.from('Hey server, whatsup?');
const serverAddress = `localhost`;
const serverPort = 41234;

client.send(messageToServer, 0, messageToServer.length, serverPort, serverAddress, sendHandler);


function sendHandler(err, data) {
    if(err) throw err;

    console.log(`Message sent!`);
    client.close();
}