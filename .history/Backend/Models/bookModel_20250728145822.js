import db from "../config/db";
 export const getAllBooks = (callback) => {
    db.query('SELECT * FROM books',callback);
 };
  export const getBookById = (id, callback) =>{
    db.query('SELECT * FROM books WHERE id = ?', [id], callback);
 }; 
  }