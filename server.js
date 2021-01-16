const express = require('express');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');
const MongoStore = require('connect-mongostore')(session);
const dbConnection = require('./config/db');
const passport = require('./passport');
const user = require('./routes/api/user');
const logger = require('morgan');
const routes = require('./routes');
const path = require('path');
const cors = require('cors');
require('./config/db')();

//Log route requests
// app.use(logger('dev'));

const PORT = process.env.PORT || 5000;

// parsing middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());


app.use(express.static(path.join(__dirname, "mindful/build")));
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, "mindful", "build", "index.html"))
});

//Sessions
// app.use(session({
//   secret: 'hello-world', //Randmozied string to generate secure hash
//   store: new MongoStore({ mongooseConnection: dbConnection }),
//   resave: false, //required
//   saveUninitialized: false //required
// }));

//Passport 
app.use(passport.initialize());
app.use(passport.session()); 

app.use(routes);
app.use('/user', user);

//Connection to server
app.listen(PORT, () => {
  console.log('app running on PORT: ' + PORT);
});

