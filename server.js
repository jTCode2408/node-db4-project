const express = require('express');
const server = express();


server.use(express.json());


server.get('/', (req, res) => {
    res.send('initial server start')
})

module.exports = server;