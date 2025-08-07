import db from "../config/db";
 export const getAllBooks = (callback) => {
    db.query('SELECT * FROM books',callback);
 };
  export const getBookById = (id, callback) =>{
    db.query('SELECT * FROM books WHERE id = ?', [id], callback);
 }; 
    export const addBook = (book, callback) => {
        const {title, author, year, genre} = book;
        db.query('INSERT INTO books (Title, author, year, genre', book, callback);
    };
    export const updateBook = (id, book, callback) => {
        db.query('UPDATE books SET ? WHERE id = ?', [book, id], callback);
    };
    export const deleteBook = (id, callback) => {
        db.query('DELETE FROM books WHERE id = ?', [id], callback);
    };