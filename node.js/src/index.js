import colors from 'colors';
import express from 'express';

const port = process.env.PORT || 3000;

const server = express();

server.get('/', (req, res) => {
    res.send('<h1>Hello world from Express Node.js</h1>');
});

server.listen(port, () => {
    console.log(colors.green(`server is listening on port: ${port}`));
});
