'use strict'
const hapi = require('hapi');
const path = require('path');
require('dotenv').config({
    path: path.join(__dirname, '../.env')
});

const router = require('./module/router');

const server = hapi.server({
    port: process.env.PORT,
    host: process.env.HOST,
    routes: {
        cors: {
            origin: ['*'],
        }
    },
    debug: {
        log: ['*']
    }
});

const init = async () => {  
    await router(server);
    await server.start();
    console.log(`Server running at : ${server.info.uri}`);
};


server.events.on('log', (event, tags) => {
    console.log(tags);
});

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
