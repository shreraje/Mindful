const express = require('express');
const session = require('express-session');
const dbConnection = require()
const passport = require('./passport');
const user = require('./routes/user');
// const routes = require('./routes');
// const path = require('path');
const app = express();
// require('./config/db')();
const logger = require('morgan');


//Log route requests
app.use(logger('dev'));

const PORT = process.env.PORT || 5000;

// parsing middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(routes);

//Sessions
app.use(session({
    secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, //required
		saveUninitialized: false //required
}));

//Passport
app.use(passport.initialize());
app.use(passport.session()); 

//Routes
app.use('/user', user);

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
//   app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, "../client/build/index.html"));
//   });
// }

app.listen(PORT, () => {
  console.log('app running on PORT: ' + PORT);
});