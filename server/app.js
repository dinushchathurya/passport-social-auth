const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger= require('morgan')
const cookirParser = require('cookie-parser')
const bodyParser = require('body-parse')
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
const swig = new swig.Swig();
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