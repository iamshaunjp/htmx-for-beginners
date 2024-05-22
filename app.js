import express from 'express';

// create app
const app = express();
app.use(express.urlencoded({extended: false}));

// static assets
app.use(express.static('public'));

// routes
app.get('/', (req, res) => {
  res.send();
});

// listen to port
app.listen(3000, () => {
  console.log('App listening on port 3000');
});