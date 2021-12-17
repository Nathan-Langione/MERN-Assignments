import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router';
import axios from 'axios';
import AuthorList from "../components/AuthorList";

const Main = () => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                console.log(res);
                setAuthors(res.data);
                setLoaded(true);
            });
    }, [loaded])
    const removeFromDom = authorId => {
        // Lint wants !== instead of !=
        // eslint-disable-next-line
        setAuthors(authors.filter(author => author._id != authorId));
    }

    return (
        <div>
            <h1>Favorite authors</h1>
            <Link to={"/new"}>
                Add an author
            </Link>
            <h2>We have quotes by:</h2>
            {loaded &&
                <AuthorList
                    authors={authors}
                    removeFromDom={removeFromDom} />}
        </div>
    )
}
export default Main;
