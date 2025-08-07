const router = require("express").Router();
const { isLoggedIn, isAdminLoggedIn } = require("./../Controller/AuthController");
const { dashboard, GetAllBlogs, AddBlogsPage } = require("../Controller/AdminController");
const { addBooks } = require('../Controllers/booksController');

// setup global middleware which need admin permission in the defined below routes
router.use(isLoggedIn);
router.use(isAdminLoggedIn);

router.get("/all-blogs", GetAllBlogs);
router.get("/dashboard", dashboard); 
router.get("/listbook", GetAllBlogs); 
router.get("/addbooks", addBooks);

module.exports = router;