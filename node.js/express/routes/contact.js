import express from 'express';

const router = express.Router();

router.get('/contact', (req, res) => {
    res.send('<h1>Contact</h1>');
});

export default router;
