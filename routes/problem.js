const express = require('express');
const router = express.Router();
const mainLayout = '../views/layouts/main.ejs';
const data = require('../problem.json');

router.get('/problem/:id', (req, res) => {
    const index = data.id.indexOf(req.params.id);
    if (index == -1) {
        res.status(404).send('404');
        return '';
    }
    const locals = {
        title: `Hello Codes - ${req.params.id}`,
        data,
        index,
    };

    res.render('problem', { locals, layout: mainLayout });
});

module.exports = router;
