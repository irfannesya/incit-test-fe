import React from 'react';

const SignIn = ({ onClose }) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSignIn = (e) => {
        e.preventDefault();
        console.log('Signing in with:', email, password);
        alert('Berhasil login');
        window.location.href = '/Profile'; // Pindah ke halaman profil setelah login
        onClose(); // Tutup popup setelah berhasil login
    };

    return (
        <div className="popup bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Sign In</h2>
                <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            <form onSubmit={handleSignIn}>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring focus:border-blue-300"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring focus:border-blue-300"
                        required
                    />
                </div>
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Sign In</button>
            </form>
        </div>
    );
};

export default SignIn;
