import db from "../config/db";
 export const getAllBooks = (callback) => {
    db.query('SELECT * FROM books',callback);
 };
  export const getBookById = (id, callback) =>{
    db.query('SELECT * FROM books WHERE id = ?', [id], callback);
 }; 
    export const addBook = (book, callback) => {
        const {title, author, year, genre} = book;
        db.query('INSERT INTO books (Title, author, year, genre) VALUES (?, ?, ?, ?)', [title, author, year, genre], callback);
};
    export const updateBook = (id, book, callback) => {
  const { title, author, year, genre } = book;
  db.query('UPDATE books SET title = ?, author = ?, year = ?, genre = ? WHERE id = ?', [title, author, year, genre, id], callback);
};

export const deleteBook = (id, callback) => {
  db.query('DELETE FROM books WHERE id = ?', [id], callback);
};

export const searchBooks = (query, callback) => {
  const search = `%${query}%`;
  db.query('SELECT * FROM books WHERE title LIKE ? OR author LIKE ?', [search, search], callback);
};

export const setBookAvailability = (id, available, callback) => {
  db.query('UPDATE books SET available = ? WHERE id = ?', [available, id], callback);
};
module.exports = bookModel;