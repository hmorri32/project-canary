const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const config = require('dotenv').config().parsed;

const cors = require('cors');

app.set('port', process.env.PORT || 3000);
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

app.use((_, res) => {
  res.status(404).json({ error: 'Not found', description: 'Route not found ' });
});

app.listen(app.get('port'));
console.log('Listening on port: ', app.get('port'));
