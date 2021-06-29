import React, { useState } from 'react';
import axios from 'axios';
export default function Form({ addNewProfile }) {
    const [userName, setUserName] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();
        const resp = await axios.get(`https://api.github.com/users/${userName}`);
        addNewProfile(resp.data);
        setUserName('');
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={userName}
                onChange={event => setUserName(event.target.value)}
                placeholder="GitHub username"
                required
            />
            <button>Add card</button>
        </form>
    );
}