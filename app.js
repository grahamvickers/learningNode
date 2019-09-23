const express = require('express');
// path lets us navigate the
const path = require('path');

// heroku assigns a port when it deploys via the process (environment variables - coming )
// locally this will run @ port 3000; remotely itll run whenever heroku tells it to run 
// a double pipe (||) means "or"
const port = process.env.PORT || 3000; 

const app = express();

app.use(express.static('public'));

// a forward slash is the home route (same as index.html)
app.get('/', (req, res) => {
  console.log('BACKEND DEV IS BORING');
  res.sendFile(path.join(__dirname + '/views/index.html'));
  // this builds localhost:3000/views/index.html
})

app.get('/contact', (req, res) => {
  console.log('your on the contact page');
  res.sendFile(path.join(__dirname + '/views/contact.html'));
})

app.get('/portfolio', (req, res) => {
  console.log('your on the portfolio page');
  res.sendFile(path.join(__dirname + '/views/portfolio.html'));
})


app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
