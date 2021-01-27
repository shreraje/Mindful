const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const routes = require('./routes');
const path = require('path');
const cors = require('cors');
const userRouter = require('./routes/user');
require('./config/db')();
const PORT = process.env.PORT || 5000;

//Log route requests
// app.use(logger('dev'));



// parsing middleware
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


app.use(express.static(path.join(__dirname, "mindful/build")));

//Routing
app.use(routes);
app.use('/user', userRouter);

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, "mindful", "build", "index.html"))
});

//Connection to server
app.listen(PORT, () => {
  console.log(`App running on PORT: ${PORT}`);
});

