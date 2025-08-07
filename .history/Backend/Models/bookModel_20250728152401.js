
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
    publishedYear: {
        type: Number
    },
    genre: {
        type: String,
        trim: true
    },
    isbn: {
        type: String,
        unique: true,
        trim: true
    },
    availableCopies: {
        type: Number,