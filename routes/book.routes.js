import express from 'express';
import {createBook, getAllBooks, getBook, deleteBook} from '../controllers/book.js'

const router=express.Router();

router.post('/addBook',createBook);

router.get('/getBooks',getAllBooks);

router.get('/getBook',getBook);

router.delete('/deleteBook',deleteBook);

export default router;