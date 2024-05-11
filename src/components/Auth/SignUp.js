import React, { useState } from 'react';
import axios from 'axios'; // Import axios untuk melakukan HTTP request
import { useHistory } from 'react-router-dom';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleSignUp = async (e) => {
        e.preventDefault();

        // Validasi password
        if (password !== confirmPassword) {
            alert('Password dan konfirmasi password harus sama');
            return;
        }

        try {
            // Kirim data pengguna ke backend
            const response = await axios.post('http://localhost:5000/api/auth/register', {
                email,
                name,
                password,
            });

            // Handle respon dari backend
            console.log('Response from backend:', response.data);
            alert('Berhasil mendaftar');
            // Setelah berhasil mendaftar, redirect ke halaman profil
            window.location.href = 'SignIn';
            console.log(ErrorEvent);
        } catch (error) {
            // Tangani error jika terjadi kesalahan
            console.error('Error during sign up:', error);
            alert('Email sudah di gunakan atau password tidak sama ');
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Password:</label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="button" onClick={togglePasswordVisibility}>
                        {showPassword ? 'Hide' : 'Show'}
                    </button>
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <button type="button" onClick={toggleConfirmPasswordVisibility}>
                        {showConfirmPassword ? 'Hide' : 'Show'}
                    </button>
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;
