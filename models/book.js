const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  authors: { type: [String], required: true },
  synopsis: String,
  date: { type: Date, default: Date.now },
  link: { type: String, required: true },
  image: { type: String, required: true },
  id: { type: String, required: true, unique: true }
});

const Book = mongoose.model("Book", bookSchema);


module.exports = Book;


