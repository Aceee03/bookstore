import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import { useNavigate, useParams } from "react-router-dom";


const DeleteBook = () => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const { id } = useParams()
    const handleDeleteBook = () => {
        setLoading(true)
        axios
        .delete(`http://localhost:5555/books/${id}`)
        .then((res) => {
            setLoading(false)
            navigate('/')
        })
        .catch((err) => {
            setLoading(false)
            alert('An error occured check your console')
            console.log(err)
        })

    }

    return ( 
    <div className="bg-red-400 rounded-lg flex flex-col">
        <h1 className="font-bold">
            Are you sure you want to delete this book?
        </h1>
        <button className="bg-red-700 rounded-lg w-fit"
        onClick={handleDeleteBook}
        >
            Yes, Delete it
        </button>
    </div> 
    );
}
 
export default DeleteBook;