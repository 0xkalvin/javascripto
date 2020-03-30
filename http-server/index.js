const http = require('http');

const port = 3000;

const requestListener = (req, res) => {
    res.writeHead(200, {'Content-Type':'application/json'});
    res.write(JSON.stringify({ message: `Up and kicking`}));
    res.end();
}

const server = http.createServer(requestListener); 


server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})
