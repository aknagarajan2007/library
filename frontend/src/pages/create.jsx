import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const API_URL = import.meta.env.VITE_API_URL;

export default function Create() {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${API_URL}/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            });

            const data = await response.json();
            alert(data.message);

            if (response.ok) {
                setEmail('');
            }
        } catch (error) {
            console.error(error);
            alert('Server connection failed');
        }
    };

    return (
        <div>
            <Link to="/">Home</Link>

            <h1>Create Page</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <br />

                <button type="submit">SUBMIT</button>
            </form>
        </div>
    );
}