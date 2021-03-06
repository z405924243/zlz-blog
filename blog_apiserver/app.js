var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var blogsRouter = require('./routes/blogs');
var blogInfoRouter = require('./routes/blogInfo');
var links = require('./routes/links');
var getMessage = require('./routes/getMessages');
var insertMsg = require('./routes/insertMsg');
var getMessageById = require('./routes/getMessageById');
var getBlogById = require('./routes/articleDetail');
var getAbout = require('./routes/about');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// api路由
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/blogs', blogsRouter);
app.use('/blogInfo', blogInfoRouter);
app.use('/links', links);
app.use('/getMessage',getMessage);
app.use('/insertMsg',insertMsg);
app.use('/getMessageById',getMessageById);
app.use('/getBlogById',getBlogById);
app.use('/getAbout',getAbout);
app.use('/onlineStateChange', require('./routes/onlineStateChange'));
app.use('/deleteBlog', require('./routes/deleteBlog'));
app.use('/addBlog', require('./routes/addBlog'));
app.use('/getAllBlog', require('./routes/allBlog'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
