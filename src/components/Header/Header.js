import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../images/travelo-logo.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';


const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div className='header'>
            <nav className='nav-logo'>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div>
                    {
                        user ?
                            <button className='signOut-btn' onClick={handleSignOut}>Sign Out</button>
                            :
                            <Link to="/login" >Login</Link>
                    }
                    <Link to="/register" >Register</Link>
                </div>

            </nav>
            <nav className='nav'>
                <Link to="/home" >Home</Link>
                <Link to="/ourservices">Services</Link>

                <Link to="/blogs" >Blogs</Link>

                <Link to="/about" >About</Link>

            </nav>
        </div>
    );
};

export default Header;