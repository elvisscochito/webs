import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.send('User list');
});

/** @note dynamic routes the order parameter important to avoid affect routes params */
/* router.get('/:id', (req, res) => {
    res.send(`User with id: ${req.params.id}`);
}); */

router.post('/new', (req, res) => {
    res.send('Create a new user with a form');
});

/* router.get('/:id', (req, res) => {
    res.send(`Get user with id: ${req.params.id}`);
});

router.put('/:id', (req, res) => {
    res.send(`User with id: ${req.params.id} was updated`);
});

router.delete('/:id', (req, res) => {
    res.send(`User with id: ${req.params.id} was deleted`);
}); */

/** @note or in a more clear way */

router
    .route('/:id')
    .get((req, res) => {
        console.log(req.user);
        res.send(`Get user with id: ${req.params.id}`);
    })
    .put((req, res) => {
        res.send(`User with id: ${req.params.id} was updated`);
    })
    .delete((req, res) => {
        res.send(`User with id: ${req.params.id} was deleted`);
    });

/** @note run functions when a route have the param */

const users = [{
    "name": "Ian"
},
{
    "name": "David"
}];

router.param("id", (req, res, next, id) => {
    console.log(`User with id: ${id}`);
    req.user = users[id];
    next();
});

export default router;
