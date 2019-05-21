const express = require('express');
const helmet = require('helmet');

const ACTION_ROUTER = require('./routers/actionRouter');
const PROJECT_ROUTER = require('./routers/projectRouter');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/actions', ACTION_ROUTER);
server.use('/api/projects', PROJECT_ROUTER);

server.get('/', (req, res) => {
    res.send(`<h2>WEBAPI-CHALLENGE LET'S GO!!!!`);
});

module.exports = server;
