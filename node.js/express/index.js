/* import http from 'http'; */
import colors from 'colors';
import express from 'express';

const port = process.env.PORT || 3000;

/** @note without express */

/* const handleServer = (req, res) => { */
    /** @note response http status codes https://es.wikipedia.org/wiki/Anexo:Códigos_de_estado_HTTP */
    /* res.writeHead(200, { 'Content-Type': 'text/html'});
    res.write('<h1>Hello World from Node.js</h1>');
    res.end();
} */

/* const server = http.createServer(handleServer); */

/** @note with express */

const server = express();

server.use(express.json)

server.get('/', (req, res) => {
    res.json({
        "status": "ok"
    })
})

server.listen(port, () => {
    console.log(colors.green(`server is listening on port: ${port}`));
})
