import BOOKS_DATA from "../data/data.js";
import createBookTemplate from './book.js';

const createListTemplate = (books) => /*html*/`
  <ul>
    ${books.map((book) => createBookTemplate(book)).join('')}
  </ul>
`;

export default createListTemplate;