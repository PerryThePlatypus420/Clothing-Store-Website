import React from 'react';
import './MyNav.css';
import swooshLogo from '../assets/swoosh-logo.png';
import { Link } from 'react-router-dom';

function MyNav() {

    const categories= ["Tees", "Button-Shirts", "Pants", "Shoes", "Accessories"];
    return (
        <>
            <div className="nav-main">

                <div className="nav-top">
                    FREE SHIPPING ON ORDERS OVER PKR 2500!
                </div>

                <div className="nav-bottom">
                    <Link to="/" className='swoosh-link'>
                        <span className='logo-and-name'>
                            <img className='swoosh-logo' src={swooshLogo} alt="swoosh logo" />
                            <p className='swoosh-text titan-one-regular'>SWOOSH</p>
                        </span>
                    </Link>

                    <span className="nav-links">
                        <Link to="/" className='swoosh-link'>Home</Link>
                        <div className="dropdown">
                            <p className="dropbtn">Categories</p>
                            <div className="dropdown-content">
                                {categories.map((category, index) => (
                                    <Link key={index} to={`/category/${category}`}>{category}</Link>
                                ))}
                            </div>
                        </div>
                        <Link to="/about" className='swoosh-link'>About Us</Link>
                    </span>

                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="cart-svg" viewBox="0 0 24 24" width="512" height="512"><path d="M22.713,4.077A2.993,2.993,0,0,0,20.41,3H4.242L4.2,2.649A3,3,0,0,0,1.222,0H1A1,1,0,0,0,1,2h.222a1,1,0,0,1,.993.883l1.376,11.7A5,5,0,0,0,8.557,19H19a1,1,0,0,0,0-2H8.557a3,3,0,0,1-2.82-2h11.92a5,5,0,0,0,4.921-4.113l.785-4.354A2.994,2.994,0,0,0,22.713,4.077ZM21.4,6.178l-.786,4.354A3,3,0,0,1,17.657,13H5.419L4.478,5H20.41A1,1,0,0,1,21.4,6.178Z"/><circle cx="7" cy="22" r="2"/><circle cx="17" cy="22" r="2"/></svg>
                    </span>
                </div>

            </div>
        </>
    );
}

export default MyNav;
