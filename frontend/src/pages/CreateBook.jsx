import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateBook = () => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [publishYear, setPublishYear] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const handleSaveBook = () => { 
        const data = {
            title,
            author,
            publishYear
        }
        setLoading(true)
        axios
        .post('http://localhost:5555/books/', data)
        .then(() => {
            setLoading(false)
            navigate('/')
        })
        .catch((err)=>{
            setLoading(false)
            console.log(err)
        })
    }


    return (
        <div>
            <BackButton />
            <h1>Create Book</h1>
            {loading ? <Spinner /> : ''}
            <div>
                <div>
                    <label>Title</label>
                    <input className="border"
                    type='text' 
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}/>
                </div>
            </div>
            <div>
                <div>
                    <label>Author</label>
                    <input 
                    className="border"
                    type='text' 
                    value={author}
                    onChange={(e)=>setAuthor(e.target.value)}/>
                </div>
            </div>
            <div>
                <div>
                    <label>Publish Year</label>
                    <input className="border"
                    type='number' 
                    value={publishYear}
                    onChange={(e)=>setPublishYear(e.target.value)}/>
                </div>
            </div>
            <button onClick={handleSaveBook}>
                Save
            </button>
        </div>
    );
}

export default CreateBook;