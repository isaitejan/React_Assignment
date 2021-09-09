const express = require('express');
const app = express();
const cors = require('cors');
const reqLog = require('./utilities/RequestLogger');
const errLog = require('./utilities/ErrorLogger');
const route = require('./routes/routing');
// const bodyParser = require('body-parser');

app.use(cors());
app.use(express.json());
app.use(reqLog);
app.use(route);
app.use(errLog);

app.listen(2020);
console.log("Server started listening at port:2020");