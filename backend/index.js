import express, { request, response } from "express"
import booksRoute from "./routes/booksRoute.js"
import { PORT } from "./config.js"
import mongoose from "mongoose"
import { Book } from "./models/book.js"
import bodyParser from "body-parser"
import cors from 'cors'
const app = express()

// Middleware for parsing request body
app.use(bodyParser.json())

// Middleware for handling CORS Policy problem
app.use(cors())

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/bookstore')
        .then(console.log('Connection OPEN'))
        .then(app.listen(PORT, () => {
            console.log(`Listening on PORT ${PORT}`)
        })
        )
}

app.use('/books', booksRoute)





