import express from 'express';
import morgan from 'morgan';

const port = process.env.PORT || 3000;

const server = express();

/** @note http methods */

/* server.get('/get', (req, res) => {
    res.send('<h1>GET</h1>');
});

server.post('/post', (req, res) => {
    res.send("<h1>POST</h1>");
});

server.put('/put', (req, res) => {
    res.send('<h1>PUT</h1>');
});

server.delete('/delete', (req, res) => {
    res.send('<h1>DELETE</h1>');
}); */

/** @note http methods examples: */

/** @note server now can understand json objects requested from an app client when it send that, an app like postman */
server.use(express.json());
server.use(morgan('dev'));

/** @note all user routes (without params) passed here will be executed the code bellow */
server.all('/user', (req, res, next) => {
    console.log('Passed here');
    /* res.send('Finished'); */
    next();
});

server.get('/', (req, res) => {
    res.send('<h1>Home</h1>');
});

server.get('/user', (req, res) => {
    res.json({
        "id": "1",
        "fullName": {
            "firstName": "David",
            "lastName": "Davidson"
        },
        "email": "david@email.com",
        "phone": 1234567890
    });
});

/**
 * @note postman json object sended
 * have a Headers(KEY: Content-Type/VALUE:application/json and the next raw Body:
 * ({
        "id": 2,
        "fullName": {
            "firstName": "Ian",
            "lastName": "Collins"
        },
        "email": "ian@email.com",
        "phone": 1234567890
    });
 * req.params allows to get the parameters from the route meanwhile req.body allows to get the data from the object itself
 */
server.post('/user', (req, res) => {
    /** @note view data requested from postman */

    /** @note get all params */
    console.log(req.body);

    /** @note access and specif params */
    console.log(req.body.fullName.firstName);

    res.send('<h1>POST received</h1>');
});

server.post('/user/:id', (req, res) => {
    /** @note view data requested from postman by an specific id */

    /** @note get all params (/user/:id/:tweet-post) */
    console.log(req.params);

    /** @note access and specific param */
    console.log(req.params.id);

    res.send(`User ${req.params.id} was created successfully`);
});

/**
 * @note postman json object sended
 * have a Headers(KEY: Content-Type/VALUE:application/json and the next raw Body:
 * ({
        "id": 2,
        "fullName": {
            "firstName": "Ian",
            "lastName": "Williams"
        },
        "email": "ian@email.com",
        "phone": 1234567890
    });
 * req.params allows to get the parameters from the route meanwhile req.body allows to get the data from the object itself
 */
server.put('/user/:id', (req, res) => {
    console.log(req.body)
    res.send(`User ${req.params.id} was updated successfully`);
});

/**
 * @note postman json object sended
 * delete the object previously created by and specific "id": 2
 */
server.delete('/user/:id', (req, res) => {
    /** @note message to client side */
    res.send(`User ${req.params.id} was deleted successfully`);

    /** @note message to server side */
    console.log(`User ${req.params.id} was deleted successfully`);
});

server.listen(port, () => {
    console.log(`server is listening on port: ${port}`);
});
