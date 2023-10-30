import express from 'express';
import {createBook, getAllBooks, getBook, updateBook, deleteBook} from '../controllers/book.js'

const router=express.Router();

router.post('/addBook',createBook);

router.get('/getBooks',getAllBooks);

router.get('/getBook/:id',getBook);

router.patch('/updateBook/:id',updateBook);

router.delete('/deleteBook?:id',deleteBook);

export default router;