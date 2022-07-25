import express from 'express';
const authMiddleware = express.Router();

authMiddleware.use((req, res, next) => {
    if (req.query.admin === 'true') {
        req.admin = true;
        console.log('Auth');
        next();
    } else {
        res.send('<h1>Not auth</h1>');
    }

    /** @note how next works */
    /* if (req.query.admin === 'true') {
        req.admin = true;
        console.log('Auth');
        next(); */
        /** @note exit the scope */
        /* return;
    } */

    /** @note no longer execute, otherwise yes */
    /* res.send('<h1>Not auth</h1>'); */
});

export default authMiddleware;
