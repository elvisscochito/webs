import express from 'express';
const middlewareLogger = express.Router();

middlewareLogger.use((req, res, next) => {
    console.log('Logged');

    /** @note Before and after execute at the same time in modules files */
    console.log('Before');
    next();
    console.log('After');
});

export default middlewareLogger;
