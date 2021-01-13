const express = require('express');
// const bodyParser = require('body-parser');
// const session = require('express-session');
// const MongoStore = require('connect-mongo')(session);
// // const dbConnection = require()
// const passport = require('./passport');
// const user = require('./routes/api/user');
// const logger = require('morgan');
const routes = require('./routes');
const app = express();
const path = require('path');
const cors = require('cors');
require('./config/db')();

//Log route requests
// app.use(logger('dev'));

const PORT = process.env.PORT || 5000;

// app.get('/', (req, res) => res.send('hello'))

// // parsing middleware
// app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
app.use(cors());


app.use(express.static(path.join(__dirname, "mindful/build")));
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, "mindful", "build", "index.html"))
});

//Sessions
// app.use(session({
//   secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
//   store: new MongoStore({ mongooseConnection: dbConnection }),
//   resave: false, //required
//   saveUninitialized: false //required
// }));

//Passport 
// app.use(passport.initialize());
// app.use(passport.session()); 

app.listen(PORT, () => {
  console.log('app running on PORT: ' + PORT);
});

