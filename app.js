const express = require('express');
const path = require('path');
const {engine} = require('express-handlebars');

const mainRoutes = require('./routes/mainRoutes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'static')));

app.set('view engine', '.hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));

app.use(mainRoutes);

app.listen(5000, () => {
    console.log('Server has started on PORT 5000');
});