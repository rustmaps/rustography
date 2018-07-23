var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var http = require('http');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
var auth = require('./auth');
var authRouter = require('./auth/auth-router');
var session = require('express-session');
const proxy = require('express-http-proxy')
var router = express.Router();
var LocalStrategy = require('passport-local').Strategy;
var cors = require('cors');
app.use(cors())

const server = http.createServer(app);
server.listen(3002);
server.on('listening', () => {
  console.log('Server is listening on port: 3000');
});

app
  .use(session({
    secret: 'zfnzkwjehgweghw',
    resave: false,
    saveUninitialized: true
  }))
  .use(auth.initialize())
  .use(auth.session());
app
  .use('/auth', authRouter)

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});
// catch 404 and forward to error handler

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
