const express = require('express')
const app = express()

// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

// Route import
const route = require('./routes/route');

// Middleware route
app.use('/', route);

// View engine
app.set('view engine', 'ejs');

app.listen(PORT, () => {
  console.log(`App listening at ${PORT}`)
})