import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfileForm = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [newUsername, setNewUsername] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Mengambil data pengguna yang sedang login dari backend
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:5000/user/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const userData = response.data;
                setEmail(userData.email);
                setUsername(userData.username);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching user data:', error);
                setIsLoading(false);
            }
        };

        fetchUserData();
    }, []);

    const handleUpdateUsername = async () => {
        try {
            const token = localStorage.getItem('token');
            await axios.put('http://localhost:5000/api/user/profile', { username: newUsername }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setUsername(newUsername);
            setNewUsername('');
        } catch (error) {
            console.error('Error updating username:', error);
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Profile</h2>
            <div>
                <label>Email:</label>
                <div>{email}</div>
            </div>
            <div>
                <label>Username:</label>
                <div>{username}</div>
            </div>
            <div>
                <label>New Username:</label>
                <input
                    type="text"
                    value={newUsername}
                    onChange={(e) => setNewUsername(e.target.value)}
                />
                <button onClick={handleUpdateUsername}>Update</button>
            </div>
        </div>
    );
};

export default ProfileForm;
