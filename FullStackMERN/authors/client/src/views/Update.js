import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import { Link } from '@reach/router';
import AuthorForm from '../components/AuthorForm';

const Update = (props) => {
    const { id } = props;
    const [author, setAuthor] = useState();
    const [loaded, setLoaded] = useState(false);
    const [oldName, setOldName] = useState();

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                setAuthor(res.data);
                setLoaded(true);
                setOldName(res.data.name);
            })
        // eslint-disable-next-line
    }, [loaded]);

    const updateAuthor = author => {
        axios.put('http://localhost:8000/api/authors/' + id, author)
            .then(res => {
                console.log(res);
                console.log("The author " + oldName + " has been updated to " + author.name);
                navigate("/");
            })
    }
    return (
        <div>
            <h1>Favorite authors</h1>
            <Link to={"/"}>
                Home
            </Link>
            <h1>Edit this author:</h1>
            {loaded && (
                <>
                    <AuthorForm
                        onSubmitProp={updateAuthor}
                        initialName={author.name}
                    />
                </>
            )}
        </div>
    )
}
export default Update;

