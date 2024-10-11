import React, { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import axios from "axios";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const ShowBook = () => {
    const [book, setBook] = useState({})
    const [loading, setLoading] = useState(false)
    const { id } = useParams()
    useEffect(() => {
        setLoading(true)
        axios
            .get(`http://localhost:5555/books/${id}`)
            .then((res) => {
                setBook(res.data)
                setLoading(false)
            })
            .catch((err) => {
                console.log(err)
                setLoading(false)
            })
    }, [])

    return (
        <div>
            <BackButton />
            <h1 className="text-3xl my-4">Show book</h1>
            <div className="rounded-xl p-4 flex flex-col border-2 border-sky-400 w-fit">
                <div className="my-4">
                    <span className="text-xl mr-4 text-gray-500">
                        ID
                    </span>
                    <span>
                        {book.id}
                    </span>
                </div>
                <div className="my-4">
                    <span className="text-xl mr-4 text-gray-500">
                        Title
                    </span>
                    <span>
                        {book.title}
                    </span>
                </div>
                <div className="my-4">
                    <span className="text-xl mr-4 text-gray-500">
                        Author
                    </span>
                    <span>
                        {book.author}
                    </span>
                </div>
                <div className="my-4">
                    <span className="text-xl mr-4 text-gray-500">
                        Publish Year
                    </span>
                    <span>
                        {book.publishYear}
                    </span>
                </div>
                <div className="my-4">
                    <span className="text-xl mr-4 text-gray-500">
                        Created at
                    </span>
                    <span>
                        {new Date(book.createdAt).toString()}
                    </span>
                </div>
                <div className="my-4">
                    <span className="text-xl mr-4 text-gray-500">
                        Last updated at
                    </span>
                    <span>
                        {new Date(book.updatedAt).toString()}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ShowBook;