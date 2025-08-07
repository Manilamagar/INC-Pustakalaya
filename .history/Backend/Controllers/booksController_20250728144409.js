import db from '../config/db.js';
 
export const getBooks = (req, res) => {
    db.query