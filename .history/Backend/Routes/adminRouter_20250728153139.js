const router = require("express").Router();
const { isLoggedIn, isAdminLoggedIn } = require("./../Controller/AuthController");
const { dashboard, GetAllBlogs, AddBlogsPage } = require("../Controller/AdminController");
const { addBooks } = require('../Controllers/booksController');

// setup global middleware which need admin permission in the defined below routes
router.use(isLoggedIn);
router.use(isAdminLoggedIn);

router.get("/all-blogs", );
router.get("/dashboard", dashboard); 
router.get("/listbook", GetListBooks); 
router.get("/addbooks", addBooks);


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