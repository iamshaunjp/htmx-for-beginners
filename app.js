import express from 'express';
import createHomepageTemplate from './views/index.js';
import createListTemplate from './views/list.js';
import createBookTemplate from './views/book.js';
import createEditFormTemplate from './views/edit.js';
import BOOKS_DATA from './data/data.js';

// create app
const app = express();
app.use(express.urlencoded({extended: false}));

// static assets
app.use(express.static('public'));

// routes
app.get('/', (req, res) => {
  res.send(createHomepageTemplate());
});

app.get('/books', (req, res) => {
  res.send(createListTemplate(BOOKS_DATA));
});

app.post('/books', (req, res) => {
  const {title, author} = req.body;
  const id = Math.random().toString();

  BOOKS_DATA.push({id, title, author});

  res.redirect('/books/' + id)
});

app.get('/books/:id', (req, res) => {
  const {id} = req.params;
  const book = BOOKS_DATA.find(b => b.id === id);

  res.send(createBookTemplate(book));
});

app.delete('/books/:id', (req, res) => {
  const idx = BOOKS_DATA.findIndex(b => b.id === req.params.id);
  BOOKS_DATA.splice(idx, 1);

  res.send();
});

app.put('/books/:id', (req, res) => {
  const {title, author} = req.body;
  const {id} = req.params;

  const newBook = {title, author, id};

  const idx = BOOKS_DATA.findIndex(b => b.id === id);
  BOOKS_DATA[idx] = newBook

  res.send(createBookTemplate(newBook));
})

app.get('/books/edit/:id', (req, res) => {
  const book = BOOKS_DATA.find(b => b.id === req.params.id);

  res.send(createEditFormTemplate(book));
});

app.post('/books/search', (req, res) => {
  const text = req.body.search.toLowerCase();
  console.log(text);
  
  res.send(createListTemplate(BOOKS_DATA.filter(b => b.title.toLowerCase().includes(text))));
});

// listen to port
app.listen(3000, () => {
  console.log('App listening on port 3000');
});