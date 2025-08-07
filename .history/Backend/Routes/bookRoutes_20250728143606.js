import express from 'express';
import {getBooks, addBooks, updateBooks, deleteBooks, editBooks, issuesBooks, returnBooks} from '../Controllers/booksController.js';
const router = express.Router();

router.get('/', getBooks);
router.post('/add', addBooks);
