import express from 'express';
import {getBooks,borrowBooks, addBooks, updateBooks, deleteBooks, editBooks, issuesBooks, returnBooks} from '../Controllers/booksController.js';
const router = express.Router();

router.get('/', getBooks);
router.post('/add', addBooks);
router.put('/update/:id', updateBooks);
router.delete('/delete/:id', deleteBooks);
router.get('/edit/:id', editBooks);
router.post('/issue', issuesBooks);
router.post('/return', returnBooks);