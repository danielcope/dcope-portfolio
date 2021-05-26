require('dotenv').config();
const express = require('express');
const nodemailer = require('./controllers/nodemailer')

const app = express();

const { PORT } = process.env;

app.use(express.json());

app.post('/email', nodemailer.sendEmail)

app.listen(PORT,(console.log('Party on port ' + PORT )));