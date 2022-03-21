var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// 引入.env
require('dotenv').config()
// 连接数据库
require('./model/connectDatabase')
var articleRequest = require('./routes/article');
const errhandle = require('./middleware/errhandle')
var app = express()

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', articleRequest);
app.use(errhandle)
module.exports = app;
