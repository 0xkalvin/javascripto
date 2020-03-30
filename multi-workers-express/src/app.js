const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use((err, req, res, next) => {
    console.error(err);
    const status = err.status || 500;
    const message = err.message || `Something went wrong`;
    res.status(status).send(message);
})

module.exports = app;