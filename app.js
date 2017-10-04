var express = require('express'),
	bodyParser = require('body-parser'),
	cookieParser = require('cookie-parser'),
	favicon = require('serve-favicon'),
	path = require('path');

var index = require('./build/routes/index');
const PORT = process.env.PORT;

var app = express();

// view engine setup
app.set('view engine', 'pug');
app.set('views', './build/views');

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/build', express.static('build'));
app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(PORT);
module.exports = app;
