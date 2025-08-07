const router = express.Router();
const {getBooks,borrowBooks,listBooks,searchBooks,viewBooks,addBooks, updateBooks, deleteBooks, editBooks, issuesBooks, returnBooks} = require('./../Controllers/booksController.js');


router.get('/', getBooks);
router.post('/borrow', borrowBooks);
router.get('/list', listBooks);
router.get('/search', searchBooks);
router.get('/view/:id', viewBooks);
router.post('/add', addBooks);
router.put('/update/:id', updateBooks);
router.delete('/delete/:id', deleteBooks);
router.get('/edit/:id', editBooks);
router.post('/issue', issuesBooks);
router.post('/return', returnBooks);

module.exports = router;