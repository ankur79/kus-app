var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongo = require('mongodb');
var monk = require('monk');

var cors = require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var fluRouter = require('./routes/flumodel');
var supplyRouter = require('./routes/statesupply');
var fluActivityRouter = require('./routes/fluactivity');

var insightsRouter = require('./routes/insights');
var pedDeathsRouter = require('./routes/peddeaths');
var hosRouter = require('./routes/hospitalizations');
var vacCoverageRouter = require('./routes/vaccoverage');
var vacEffectRouter = require('./routes/vaceffect');

var app = express();
app.use(cors());
// New Code

var db = monk('mongodb://localhost:27017/kusaridb');
// view engine setup app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade'); //Serve static files from the React app

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'client/build')));

app.use(function (req, res, next) {
  req.db = db;
  next();
});
// The "catchall" handler: for any request that doesn't match one above, send
// back React's index.html file.
/*app.get('/', (req, res) => {
  console.log(req)
  console.log(req.app.get('port'))
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});*/

app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/flumodel', fluRouter);
app.use('/api/statesupply', supplyRouter);
app.use('/api/fluactivity', fluActivityRouter);

app.use('/api/insights', insightsRouter);
app.use('/api/peddeaths', pedDeathsRouter);
app.use('/api/hospitalizations', hosRouter);
app.use('/api/vacCoverage', vacCoverageRouter);
app.use('/api/vacEffect', vacEffectRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req
    .app
    .get('env') === 'development'
    ? err
    : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
