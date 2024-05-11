import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import Dashboard from './components/Auth/Dashboard';


const App = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignInClick = () => {
    setShowSignIn(true);
    setShowSignUp(false); // Tutup popup signup jika terbuka
  };

  const handleSignUpClick = () => {
    setShowSignUp(true);
    setShowSignIn(false); // Tutup popup signin jika terbuka
  };

  const handlePopupClose = () => {
    setShowSignIn(false);
    setShowSignUp(false);
  };

  const handleSignOutClick = () => {
    // Tambahkan logika untuk logout di sini
    setIsLoggedIn(false);
  };


  return (
    <Router>
      <div>
        <h1>Welcome to Register Page</h1>
        <button onClick={handleSignInClick}>Login</button>
        <button onClick={handleSignUpClick}>Register</button>

        {showSignIn && <SignIn onClose={handlePopupClose} />}
        {showSignUp && <SignUp onClose={handlePopupClose} />}
      </div>

      <Routes>
        <Route path="/signin" element={<SignIn onSignIn={handleSignInClick} />} />
        <Route path="/signup" element={<SignUp />} />
        {isLoggedIn ? (
          <Route path="/dashboard" element={<Dashboard onSignOut={handleSignOutClick} />} />
        ) : (
          <Route path="/dashboard" element={<Navigate to="/dashboard" />} />
        )}
      </Routes>
    </Router >
  );
}

export default App;