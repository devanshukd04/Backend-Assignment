import mongoose from "mongoose";

const Schema = mongoose.Schema;

const bookSchema=new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    }
},{timestamps:true});

export default mongoose.model('Book', bookSchema);