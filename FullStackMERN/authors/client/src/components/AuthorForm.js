import React, { useState } from "react";
// eslint-disable-next-line
import axios from 'axios';
import { Link } from '@reach/router';

const AuthorForm = (props) => {
    const { initialName, onSubmitProp } = props;
    const [name, setName] = useState(initialName);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({ name });
        setName("");
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div className="form-div">
                <label>Name:</label><br />
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <Link to="/">
                <button type="button">
                    Cancel
                </button>
            </Link>
            <input type="submit" />

        </form>
    );
};

export default AuthorForm;