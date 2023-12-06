const express = require('express');
const router = express.Router();
const data = require('../problem.json');

router.get('/api/problem/:id', (req, res) => {
    const index = data.id.indexOf(req.params.id);
    if (index == -1) {
        res.status(404).json({ code: 404, message: '문제를 찾을수 없습니다.' });
        return;
    }
    res.status(200).json({
        code: 200,
        message: '성공',
        data: {
            id: req.params.id,
            name: data.name[index],
            tierDisplayName: data.problemteirdisplayName[index],
            tierid: data.problemtierid[index],
        },
    });
});

module.exports = router;
