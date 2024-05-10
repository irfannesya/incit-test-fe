import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
    // State untuk menyimpan email dan nama pengguna
    const [email, setEmail] = useState('example@example.com');
    const [username, setUsername] = useState('JohnDoe');

    // State untuk menyimpan input nama baru dari pengguna
    const [newUsername, setNewUsername] = useState('');

    // Fungsi untuk mengubah nama pengguna
    const handleUsernameChange = () => {
        setUsername(newUsername);
        // Setelah mengubah nama, reset input nama baru
        setNewUsername('');
    };

    return (
        <div className="profile-container">
            <h2>User Profile</h2>
            <div className="profile-info">
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Username:</strong> {username}</p>
            </div>
            <div className="change-username">
                <input
                    type="text"
                    placeholder="Enter new username"
                    value={newUsername}
                    onChange={(e) => setNewUsername(e.target.value)}
                />
                <button onClick={handleUsernameChange}>Change Username</button>
            </div>
        </div>
    );
};

export default Profile;
