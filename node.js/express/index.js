/* import http from 'http'; */

/* import colors from 'colors'; */
import express from 'express';
import morgan from 'morgan';

import about from './routes/about.js';
import contact from './routes/contact.js';
import user from './routes/user.js';

import middlewareLogger from './middleware/logger-middleware.js';
import authMiddleware from './middleware/auth-middleware.js';

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
server.set('title', 'Node.js Express'); /** @note custom var */
server.set('port', /* port */ 3000);
server.set('view engine', 'ejs');

/** @note middleware (register upcoming request )*/

/* function logger(req, res, next) {
    console.info("Request received"); */
    /** @note return me the protocol that user requested, from which server and finally the route */
    /* console.info(`Request: ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}; */

/** @note global middleware */
/* server.use(logger); */

/** @note morgan, a HTTP request logger middleware */
server.use(morgan('dev'));
/** @note allows to read info from forms (must be at the top for functional reasons) */
server.use(express.urlencoded({extended: true}));
/** @note allows to read/write json data */
/* app.use (express.json()); */

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
    /* res.render('index.ejs', {text: "Aa"}); */

    /** @note if names are equal, you can directly short it, users means database */
    /* res.render('index.ejs', {users}); */

    /** @note assignation, different names */
    res.render('index.ejs', {users: database});
});

/** @note use logger middleware just in a specific route */
server.get('/home', /* logger, */ (req, res) => {
    res.send('<h1>Hello world from Node.js Express framework</h1>');
});

server.use('/', about);
server.use('/api', contact);
server.use('/user', user);

server.get('/test', (req, res) => {
    /* res.send('<h1>Test</h1>'); */
    /* res.sendStatus(500); */
    /* res.status(500).send('<h1>Error</h1>'); */
    /* res.status(500).json({"message": "Error"}); */
    res.download('index.js');
});

/* server.get('/test-middleware-home', (req, res, next) => {
    console.log('Home page');
    res.send('<h1>Home page</h1>');
    next(); */ /** @note access to next middleware before get it */
/* }); */

/* function middlewareLoggerLocal(req, res, next) {
    console.log('Before');
    next();
    console.log('After');
}; */

 /** @note global middleware just from here to bottom */
/* server.use(middlewareLoggerLocal); */
server.use(middlewareLogger);

server.get('/test-middleware-home', (req, res) => {
    console.log('Home page');
    res.send('<h1>Home page</h1>');
});

 /** @note use middleware just in a specific route */
server.get('/test-middleware-user', authMiddleware, (req, res) => {
    console.log(`User is admin = ${req.admin}`);
    console.log('User page');
    res.send('<h1>User page</h1>');
});

/** @note express.static is a middleware for access to all static files inside public folder in the client, example: http://localhost:3000/scripts/main.js */
server.use(express.static('public'));

server.listen(/* port,  */server.get('port'), /* hostname, */ () => {
    console.info(server.get('title'))
    /* console.log(`server is listening on port: ${port}`); */
    console.log('server is listening on port:', server.get('port'));
    /* console.log(`Server is running at http://${hostname}:${port}`); */
});
