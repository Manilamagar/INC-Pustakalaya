const { DataTypes } = require('sequelize');
const sequelize = require('../database/database'); // Adjust path as needed

const Book = sequelize.define('Book', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  publisher: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  publishedYear: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  isbn: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  copiesAvailable: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: true,
  }
}, {
  tableName: 'books',
  timestamps: true,
});

module.exports = Book;