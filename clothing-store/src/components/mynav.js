// create a button to navigate to the cart page
import React from 'react';
import { Link } from 'react-router-dom';

const MyNav = () => {
    return (
        <div>
            <Link to="/cart">
                <button>Cart</button>
            </Link>
        </div>
    );
};

export default MyNav;
