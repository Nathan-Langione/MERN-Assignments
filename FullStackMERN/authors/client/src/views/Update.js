import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import AuthorForm from '../components/AuthorForm';
import DeleteButton from '../components/DeleteButton';
const Update = (props) => {
    const { id } = props;
    const [author, setAuthor] = useState();
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                setAuthor(res.data);
                setLoaded(true);
            })
        // eslint-disable-next-line
    }, [])
    const updateAuthor = author => {
        axios.put('http://localhost:8000/api/authors/' + id, author)
            .then(res => {
                console.log(res);
                navigate("/");
                console.log("here");
            })
    }
    return (
        <div>
            <h1>Update Author</h1>
            {loaded && (
                <>
                    <AuthorForm
                        onSubmitProp={updateAuthor}
                        initialName={author.name}
                    />
                    <DeleteButton
                        authorId={author._id}
                        successCallback={() => navigate("/")} />
                </>
            )}
        </div>
    )
}
export default Update;

