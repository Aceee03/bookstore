import express from 'express'
import { Book } from '../models/book.js'
const router = express.Router()

// Get all books route
router.get('/', async (req, res) => {
    try {
        const books = await Book.find({})
        res.status(200).send(books);
    } catch (error) {
        console.log(error.message)
        res.status(500).send({ message: error.message })
    }
})

// Update book route
router.put('/:id', async (req, res) => {
    try {
        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).send({
                message: "Send all required fields"
            })
        }
        const { id } = req.params
        const result = await Book.findByIdAndUpdate(id, req.body)

        if (!result) {
            return res.status(404).json({ message: 'Book not found' })
        }
        return res.status(200).send({ message: 'Book updated succesfully' })

    } catch (err) {
        console.log(err.message)
    }
})

// Delete book route
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const result = await Book.findByIdAndDelete(id)

        if (!result) {
            return res.status(404).json({ message: 'Book not found' })
        }
        return res.status(200).send({ message: 'Book deleted succesfully' })

    } catch (err) {
        console.log(err.message)
    }
})

// Find book by id route
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const foundBook = await Book.findById(id)
        if (!foundBook) {
            return res.status(404).send({ message: 'Book not found' })
        }
        res.status(200).send(foundBook)
    } catch (error) {
        console.log(error.message)
        res.status(500).send({ message: error.message })
    }
})

// Add new book route
router.post('/', async (req, res) => {
    try {
        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).send({
                message: "Send all required fields"
            })
        }

        const newBook = new Book(req.body)
        await newBook.save()

        return res.status(201).send(newBook)

    } catch (error) {
        console.log(error)
    }
})

export default router