import mongoose from "mongoose";
const Schema = mongoose.Schema

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publishYear: {
        type: Number,
        required: true
    },
},
    {
        timestamps: true
    }
)

export const Book = mongoose.model('Book', bookSchema)