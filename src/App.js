import React, { useState } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';


const App = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

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

  return (
    <Router>
      <div>
        <h1>Welcome to Register Page</h1>
        <button onClick={handleSignInClick}>Login</button>
        <button onClick={handleSignUpClick}>Register</button>

        {showSignIn && <SignIn onClose={handlePopupClose} />}
        {showSignUp && <SignUp onClose={handlePopupClose} />}

        
      </div>
    </Router >
  );
}

export default App;
