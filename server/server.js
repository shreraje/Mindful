const express = require('express');
const routes = require('./routes');
const app = express();
const path = require('path');
require('./config/db')();

const PORT = process.env.PORT || 5000;

// app.get('/', (req, res) => res.send('hello'))

// // parsing middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "mindful/build")));
}

app.listen(PORT, () => {
  console.log('app running on PORT: ' + PORT);
});

