import React, { useState, useEffect, useContext } from 'react';
import ProductCard from '../components/ProductCard';
import { WishlistContext } from '../wishlistContext';
import { Link } from 'react-router-dom';

function Wishlist() {
    const { wishlist } = useContext(WishlistContext);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWishlistProducts = async () => {
            try {
                const productIds = Object.keys(wishlist);
                if (productIds.length === 0) {
                    setLoading(false);
                    setProducts([]);
                    return;
                }

                const response = await fetch('http://localhost:3001/api/products/ids', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ ids: productIds })
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setProducts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchWishlistProducts();
    }, [wishlist]);

    if (loading) return <h3>Loading...</h3>;
    if (error) return <h3>Error: {error}</h3>;

    return (
        <>
            <h1 className='mt-5 mb-4'>Wishlist</h1>

            <div className="container my-5">
                <div className='row my-4'>
                    {
                        products.length === 0 && <h3>Your wishlist is empty</h3>
                    }
                    {products.map(product => (
                        <div key={product.id} className='col-md-4 my-3'>
                            <ProductCard
                                id={product.id}
                                title={product.title}
                                price={product.price}
                                img={product.img}
                            />
                        </div>
                    ))}
                </div>
                <div className="mt-5">
                    <Link to='/' className='btn btn-dark btn-lg'>
                        {products.length > 0 ? 'Continue Shopping' : 'Start Adding Products'}
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Wishlist;
