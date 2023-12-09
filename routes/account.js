const express = require('express');
const router = express.Router();
const mainLayout = '../views/layouts/main.ejs';

router.get('/login', (req, res) => {
    const locals = {
        title: 'Hello Codes',
    };
    res.render('login', { locals, layout: mainLayout });
});

module.exports = router;
