import React from "react";
import ProductCard from "../components/ProductCard";


function SummerCollection(){

    const summer_collection = [
        {
            title: 'Brown Tee',
            price: '1000',
            img: 'https://vibgyorclothing.com.pk/cdn/shop/files/BrownOversizedTee.png?v=1717928353&width=1445'
        },
        {
            title: 'Brown Tee',
            price: '1000',
            img: 'https://vibgyorclothing.com.pk/cdn/shop/files/BrownOversizedTee.png?v=1717928353&width=1445'
        },
        {
            title: 'Brown Tee',
            price: '1000',
            img: 'https://vibgyorclothing.com.pk/cdn/shop/files/BrownOversizedTee.png?v=1717928353&width=1445'
        },
        {
            title: 'Brown Tee',
            price: '1000',
            img: 'https://vibgyorclothing.com.pk/cdn/shop/files/BrownOversizedTee.png?v=1717928353&width=1445'
        },
        {
            title: 'Brown Tee',
            price: '1000',
            img: 'https://vibgyorclothing.com.pk/cdn/shop/files/BrownOversizedTee.png?v=1717928353&width=1445'
        },
        {
            title: 'Brown Tee',
            price: '1000',
            img: 'https://vibgyorclothing.com.pk/cdn/shop/files/BrownOversizedTee.png?v=1717928353&width=1445'
        },
        {
            title: 'Brown Tee',
            price: '1000',
            img: 'https://vibgyorclothing.com.pk/cdn/shop/files/BrownOversizedTee.png?v=1717928353&width=1445'
        },
        
       
    ];

    const handleAddToCart = () => {
        // Logic to add the item to the cart
        alert('Item added to cart');
    };
    
    return(

        <div className="summer24">
            <span>
                <h1 >Drop'24</h1>
                <h3>Summer Collection</h3>
            </span>

            <div className="container my-5">
                <div className="row my-4">
                {summer_collection.map((product, index) => (
                    <div className="col-md-4 my-3">
                        <ProductCard title={product.title} price={product.price} img={product.img} onAddToCart={handleAddToCart} />
                    </div>
                ))}
                </div>
            </div>

        </div>
    );
}

export default SummerCollection;