const express = require('express');
const routes = require('./routes/index.js');

const app = express();

// addCustomRoutes

app.use(routes);

// view engine setup
app.set('views', 'views');
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));


app.listen(3000, () => console.log('Listening on port 3000!'));