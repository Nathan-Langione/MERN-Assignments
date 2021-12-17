import React, { useEffect, useState } from 'react'

import axios from 'axios';
import AuthorForm from "../components/AuthorForm";
import { navigate } from '@reach/router';
import { Link } from '@reach/router';

const Create = () => {
    const [authors, setAuthors] = useState([]);

    const createAuthor = author => {
        axios.post('http://localhost:8000/api/authors', author)
            .then(res => {
                console.log(res);
                setAuthors([...authors, res.data]);
                navigate("/");
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
        </div>
    )
}
export default Create;