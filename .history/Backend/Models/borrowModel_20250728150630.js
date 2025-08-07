import db from '../config/db.js';
import { setAvailability } from './bookModel.js';

export const issueBook = async (data) => {
  const { user_id, book_id, borrow_date, return_date } = data;
  return new Promise((resolve, reject) => {
    db.query(
      'INSERT INTO borrows (user_id, book_id, borrow_date, return_date) VALUES (?, ?, ?, ?)',
      [user_id, book_id, borrow_date, return_date],
      async (err, result) => {
        if (err) reject(err);
        else {
          await setAvailability(book_id, false);
          resolve(result.insertId);
        }
      }
    );
  });
};

export const returnBook = async (book_id) => {
  return new Promise((resolve, reject) => {
    db.query('UPDATE books SET available = TRUE WHERE id = ?', [book_id], (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
};

export const getBorrowHistory = () => {
  return new Promise((resolve, reject) => {
    db.query(
      `SELECT b.id, u.name AS user, bk.title AS book, b.borrow_date, b.return_date
       FROM borrows b
       JOIN users u ON b.user_id = u.id
       JOIN books bk ON b.book_id = bk.id`,
      (err, result) => {
        if (err) reject(err);
        else resolve(result);
      }
    );
  });
};
