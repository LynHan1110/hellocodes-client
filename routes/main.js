const express = require('express');
const router = express.Router();
const mainLayout = "../views/layouts/main.ejs"

router.get("/", (req, res) => {
    const locals = {
        title: "Hello Codes"
    };
    res.render('main', {locals ,layout: mainLayout});
})

module.exports = router