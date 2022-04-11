var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// 引入.env
require('dotenv').config()
// 连接数据库
require('./model/connectDatabase')
// 用户操作
const User = require('./routes/User');
// 文章操作
const Article = require('./routes/article')
const errhandle = require('./middleware/errhandle')
var app = express()

app.use(logger('dev'));
// 处理json数据
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// token 校验中间件
app.use(require('./middleware/tokenCheck'))
app.use('/api/user', User);
app.use('/api/article',Article)
app.use(errhandle)
module.exports = app;
