import { useState } from "react";
import config from "../../config.json";  // Ensure the config file exists with the Google Client ID
import fxlm from "../../assets/images/logo/logo.png";  
import { GoogleLogin } from 'react-google-login';
import { FaEnvelope, FaLock } from 'react-icons/fa'; // Icons for email and password inputs
import './login.css';  // Import custom CSS

const Login = ({ setIsAuthenticated }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState('');
    const [isDarkBackground, setIsDarkBackground] = useState(false);

    const logout = () => {
        setIsAuthenticated(false);
        setToken('');
        setUser(null);
    };

    const googleResponse = (response) => {
        console.log("Google response:", response);

        if (response?.accessToken) {
            const tokenBlob = new Blob([JSON.stringify({ access_token: response.accessToken })], { type: 'application/json' });

            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: tokenBlob,
                mode: 'cors',
                cache: 'default',
            };

            fetch('http://localhost:5173/api/v1/auth/google', options)
                .then((r) => {
                    const token = r.headers.get('x-auth-token');
                    if (token) {
                        r.json().then((user) => {
                            setIsAuthenticated(true);
                            setUser(user);
                            setToken(token);
                        });
                    }
                })
                .catch((error) => {
                    console.error('Error during Google authentication:', error);
                });
        }
    };

    const onFailure = (error) => {
        console.log("Google login failure:", error);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', e.target.email.value);
        console.log('Password:', e.target.password.value);
    };

    const headerStyle = {
        color: isDarkBackground ? 'white' : 'black', // Change color based on background
    };

    return (
        <>
            <div className={`login-container ${isDarkBackground ? 'dark-bg' : 'light-bg'}`}>
                <div className="login-logo-container">
                    <img className="login-logo" src={fxlm} alt="Your Company" />
                </div>

                <h2 className="login-header" style={headerStyle}>Sign in to your FXLM account</h2>

                <div className="login-form-container">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="login-form-group">
                            <label htmlFor="email">Email address</label>
                            <div className="mt-2 relative">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>

                        <div className="login-form-group">
                            <div className="flex items-center justify-between">
                                <label htmlFor="password">Password</label>
                            </div>
                            <div className="mt-2 relative">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    placeholder="Enter your password"
                                />
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="login-button">Sign in</button>
                        </div>

                        <div className="login-google-login-container">
                            <GoogleLogin
                                clientId={config.GOOGLE_CLIENT_ID}
                                buttonText="Login with Google"
                                onSuccess={googleResponse}
                                onFailure={onFailure}
                                className="login-google-login-button"
                            />
                        </div>
                    </form>

                    <div className="login-footer">
                        <p>Not a member? <a href="#">Sign up now!</a></p>
                        <a href="#">Forgot password?</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
