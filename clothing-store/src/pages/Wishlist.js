import React, { useContext } from 'react';
import ProductCard from '../components/ProductCard';
import products from '../products';
import { WishlistContext } from '../wishlistContext';
import { Link } from 'react-router-dom';

function Wishlist() {
    const { wishlist, isInWishlist } = useContext(WishlistContext);

    const wishlistItems = Object.keys(wishlist);

    return (
        <>

            <h1 className='mt-5 mb-4'>Wishlist</h1>


            <div className="container my-5">
                <div className='row my-4'>

                    {
                        wishlistItems.length === 0 && <h3>Your wishlist is empty</h3>
                    }
                    {wishlistItems.map(productId => {
                        const product = products.find(product => product.id == productId);
                        return (
                            <div key={product.id} className='col-md-4 my-3'>
                                <ProductCard
                                    id={product.id}
                                    title={product.title}
                                    price={product.price}
                                    img={product.img}
                                />
                            </div>
                        );
                    })}
                </div>
                <div className="mt-5">
                    {wishlistItems.length > 0 ? (
                        <Link to='/' className='btn btn-dark  btn-lg'>Continue Shopping</Link>
                    ) : (
                        <Link to='/' className='btn btn-dark  btn-lg'>Start Adding Products</Link>
                    )}
                </div>
            </div>

        </>
    );
}

export default Wishlist;
