require('dotenv').config();
const express = require('express');
const app = express();
const { PORT } = process.env;

app.use(express.json());

app.listen(PORT,(console.log('Party on port ' + PORT )));