const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');
const port = 3000;

app.use(express.static('public'));
app.use(expressLayouts);
app.use('/', require('./routes/main'));
app.use('/', require('./routes/problem'));

app.listen(port, () => {
    console.log(`${port}번 포트에서 실행중`);
});
