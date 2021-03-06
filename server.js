const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const app = express();
const PORT = (process.env.PORT || 5000);

const index = require('./controllers/burgers_controller.js');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(methodOverride('_method'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

app.listen(PORT);
