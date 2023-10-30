import _ from "lodash";
import Book from "../models/Book.js";
import "dotenv/config";
import { Response } from "./response.js";

const createBook = async (req, res) => {
  const { title, author, summary } = req.body;
  try {
    if (!title || !author || !summary) {
      return res
        .status(400)
        .json(Response(false, "Please send title, author and summary", {}));
    }

    const book = new Book({
      title: title,
      author: author,
      summary: summary,
    });

    const result = await book.save();
    return res
      .status(201)
      .json(Response(true, "Book added Successfully", result));
  } catch (error) {
    return res.status(500).json(Response(false, error.message, {}));
  }
};

const getAllBooks = async (req, res) => {
  try {
    const result = await Book.find({});
    return res
      .status(200)
      .json(Response(true, "Books fetched Successfully", result));
  } catch (error) {
    return res.status(500).json(Response(false, error.message, {}));
  }
};

const getBook = async (req, res) => {
  const id = req.query.id;

  try {
    if (!id) {
      return res.status(404).json(Response(false, `Book id not passed`, {}));
    }
    const book = await Book.findById({
      _id: id,
    });

    if (!book) {
      return res
        .status(404)
        .json(Response(true, `Book with given id - ${id} doesn't exists`));
    }
    return res
      .status(200)
      .json(Response(true, "Book fetched Successfully", book));
  } catch (error) {
    return res.status(500).json(Response(false, error.message, {}));
  }
};

const deleteBook = async (req, res) => {
  const { id } = req.body;

  try {
    if (!id) {
      return res.status(404).json(Response(false, `Book id not passed`, {}));
    }

    const book = await Book.deleteOne({
      _id: id,
    });

    console.log(book);

    if (book.deletedCount < 1) {
      return res
        .status(404)
        .json(Response(true, `No book with given id - ${id} exists`, {}));
    }
    return res
      .status(200)
      .json(Response(true, "Book deleted Successfully", book));
  } catch (error) {
    return res.status(500).json(Response(false, error.message, {}));
  }
};

const updateBook = async (req, res) => {
  const id = req.query.id;
  
  const book = req.body;

  try {
    if (!id) {
      return res.status(404).json(Response(false, `Book id not passed`, {}));
    }    

    const updatedBook = await Book.findByIdAndUpdate(id, {...book, id} , {new:true});

    return res
      .status(200)
      .json(Response(true, "Book updated Successfully", updatedBook));

  } catch (error) {
    return res.status(500).json(Response(false, error.message, {}));
  }
};

export { createBook, getAllBooks, getBook, updateBook, deleteBook };
