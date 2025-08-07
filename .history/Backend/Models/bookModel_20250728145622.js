import db from "../config/db";
 export const getAllBooks = (req, res) => {
    db.query('SELECT * FROM books', (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json(result);
    }