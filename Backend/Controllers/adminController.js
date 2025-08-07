const bookModel = require("../Model/BookModel");
const categoryModel = require("../Model/CategoryModel");
const userModel = require("../Model/UserModel");
const CatchAsync = require("../Utils/CatchAsync");

exports.dashboard = CatchAsync(async (req, res) => {
    const user = res.local.user;
    const CategoryList = await categoryModel.find();
    const UserList = await userModel.find();
    const BookList = await bookModel.find();

    const availableBooks = await bookModel.find({ status: "Available" });

    res.render("Admin/Pages/Dashboard/Dashboard.ejs", {
        layout: "AdminLayout",
        counts: [
            { Table: "Users", count: UserList.length },
            { Table: "Books", count: BookList.length },
            { Table: "Categories", count: CategoryList.length }
        ],
        availableBooks,
        user
    });
});

exports.GetAllBooks = CatchAsync(async (req, res) => {
    const AllBooks = await bookModel.find().populate("category").populate("issuedTo");
    console.log(AllBooks);

    res.render("Admin/Pages/All_Books/All_Books.ejs", {
        layout: "AdminLayout",
        AllBooks
    });
});

exports.AddBooksPage = CatchAsync(async (req, res) => {
    const CategoryList = await categoryModel.find({ isActive: true });

    res.render("Admin/Pages/Add_Books/Add_Books.ejs", {
        layout: "AdminLayout",
        CategoryList
    });
});
