import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AuthorForm from "../components/AuthorForm";
import { navigate } from '@reach/router';
import { Link } from '@reach/router';

const Create = () => {
    const [authors, setAuthors] = useState([]);
    const [errors, setErrors] = useState([]);

    const createAuthor = author => {
        axios.post('http://localhost:8000/api/authors', author)
            .then(res => {
                console.log(res);
                setAuthors([...authors, res.data]);
                navigate("/");
            })
            .catch(err => {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }

    return (
        <div>
            <h1>Favorite authors</h1>
            <Link to={"/"}>
                Home
            </Link>
            <h2>Add a new author:</h2>
            <AuthorForm
                onSubmitProp={createAuthor}
                initialName=""
            />
            {errors.map((err, index) => <p key={index}>{err}</p>)}
        </div>
    )
}
export default Create;