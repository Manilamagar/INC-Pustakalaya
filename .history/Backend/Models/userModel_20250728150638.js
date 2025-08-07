import db from '../config/db.js';

export const getUserById = (id) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM users WHERE id = ?', [id], (err, result) => {
      if (err) reject(err);
      else resolve(result[0]);
    });
  });
};

export const addUser = (userData) => {
  const { name, email } = userData;
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], (err, result) => {
      if (err) reject(err);
      else resolve(result.insertId);
    });
  });
};
