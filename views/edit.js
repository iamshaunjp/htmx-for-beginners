const createEditFormTemplate = (book) => /*html*/`
  <form hx-put="/books/${book.id}" hx-target="closest li" hx-swap="outerHTML">
    <input 
      name="title"
      placeholder="title" 
      type="text" 
      value="${book.title}" 
    />
    <input 
      name="author"
      placeholder="author" 
      type="text" 
      value="${book.author}" 
    />
    <button>Confirm</button>
  </form>
`;

export default createEditFormTemplate;