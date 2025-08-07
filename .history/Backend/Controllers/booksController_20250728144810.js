import db from '../config/db.js';
 
export const getBooks = (req, res) => {
    db.query('SELECT * FROM books', (err, results) => {
        if (err) return res.json({error: err });
        res.json(result);
    });
};


export const addBooks = (req, res) => {
    const { title, author, category, isbn, publishedDate } = req.body;
    const sql ='INSERT INTO books (title, author,year,genre, isbn, publishedDate) VALUES (?, ?, ?, ?, ?)';
    db.query(sql[title, author, category, isbn, publishedDate], (err, result) => {
        if (err) return res.json({error: err });
        res.json({ message: 'Book added successfully', bookId: result.insertId });
    });
}