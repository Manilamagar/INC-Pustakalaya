import db from '../config/db.js';
 
export const getBooks = (req, res) => {
    db.query('SELECT * FROM books', (err, results) => {