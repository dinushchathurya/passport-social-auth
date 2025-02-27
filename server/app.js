const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger= require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const swig = require('swig')
const passport = require('passport')
const session = require('express-session')
const mongoose= require('mongoose')

// *** routes *** //
const routes = require('./routes/index.js')

// *** express instance *** //
const app = express()

// *** mongoose *** //
mongoose.connect('mongodb://localhost/passport-social-auth');

// *** view engine *** //
app.engine('html', swig.renderFile);
app.set('view engine', 'html');

// *** static directory *** //
app.set('views', path.join(__dirname, 'views'));

// *** config middleware *** //
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client/public')));
app.use(session({
    secret: 'Den Ninja',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// *** main routes *** //
app.use('/', routes);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// *** error handlers *** //

// development error handler will print stacktrace //
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler no stacktraces leaked to user //
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
