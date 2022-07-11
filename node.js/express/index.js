/* import http from 'http'; */

/* import colors from 'colors'; */
import express from 'express';
import morgan from 'morgan';

import about from './routes/about.js';
import contact from './routes/contact.js';

/* const hostname = process.env.HOSTNAME || '127.0.0.1'; */
const port = process.env.PORT || 3000;

/** @note without express */

/* const handleServer = (req, res) => { */
    /** @note response http status codes https://es.wikipedia.org/wiki/Anexo:Códigos_de_estado_HTTP */

    /* res.status = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World'); */

    /** @note or in a more simple */

    /* res.writeHead(200, { 'Content-Type': 'text/html'});
    res.write('<h1>Hello World from Node.js</h1>');
    res.end();
} */

/* const server = http.createServer(handleServer); */

/** @note with express */

const server = express();

/** @note settings */
server.set('title', 'Node.js Express');
server.set('port', /* port */ 3000);
server.set('view engine', 'ejs');

/** @note middleware (register upcoming request )*/

/* function logger(req, res, next) {
    console.info("Request received"); */
    /** @note return me the protocol that user requested, from which server and finally the route */
    /* console.info(`Request: ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}; */

/* server.use(logger); */

/** @note morgan, a HTTP request logger middleware */
server.use(morgan('dev'));

/** @note all user routes (without params) passed here will be executed the code bellow */

/* server.all('/user', (req, res, next) => {
    console.log('Passed here'); */
    /* res.send('Finished'); */
    /* next();
}); */

/** @note routes */

server.get('/ejs', (req, res) => {
    /** @note simulated get users from database */
    let database = [{
        "id": "1",
        "fullName": {
            "firstName": "David",
            "lastName": "Davidson"
        },
        "email": "david@email.com",
        "phone": 1234567890
    },{
        "id": 2,
        "fullName": {
            "firstName": "Ian",
            "lastName": "Collins"
        },
        "email": "ian@email.com",
        "phone": 1234567890
    }];
    res.render('index.ejs', {users: database});
});

server.get('/home', (req, res) => {
    res.send('<h1>Hello world from Node.js Express framework</h1>');
});

server.use('/', about);
server.use('/api', contact);

server.get('/test', (req, res) => {
    res.send('<h1>Test</h1>');
});

/** @note express.static is a middleware for access to all static files inside public folder in the client, example: http://localhost:3000/scripts/main.js */
server.use(express.static('public'));

server.listen(/* port,  */server.get('port'), /* hostname, */ () => {
    console.info(server.get('title'))
    /* console.log(`server is listening on port: ${port}`); */
    console.log('server is listening on port:', server.get('port'));
    /* console.log(`Server is running at http://${hostname}:${port}`); */
});
