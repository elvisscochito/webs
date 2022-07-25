import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    /**@note get query form the current route: user?name=Test */
    console.info(req.query.name);
    res.send('User list');
});

/** @note dynamic routes the order parameter important to avoid affect routes params */
/* router.get('/:id', (req, res) => {
    res.send(`User with id: ${req.params.id}`);
}); */

/**@note Parsing Form/JSON Data */
router.get('/new', (req, res) => {
    console.log('Create a new user with a form');

    /** @note passing data to the view ejs form */
    /* res.render('user/new.ejs', {firstName: 'David'}); */

    res.render('user/new.ejs');
});

router.post('/', (req, res) => {
    /* res.send('User was created successfully'); */

    const isValid = true;

    if (isValid) {
        users.push({fistName: req.body.firstName});

        /** @note redirect and access to last user via route */
        res.redirect(`/user/${users.length - 1}`);

        /** @note access data from the view ejs form name attribute */
        console.log(req.body.firstName);
    } else {
        console.warn("Error");

        /** @note go bak to the form and set the previous data with the for name attribute (for a better user experience)*/
        res.render(`user/new.ejs`, {firstName : req.body.firstName});
    }
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

/** @note or in a more clear way (nested routes) */

router
    .route('/:id')
    .get((req, res) => {
        /** @note get user data from users array (such as database) */
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
    /* "id": "0", */
    "name": "Ian"
},
{
    /* "id": "1", */
    "name": "David"
}];

router.param("id", (req, res, next, id) => {
    console.log(`User with id: ${id}`);
    req.user = users[id];
    next();
});

export default router;
