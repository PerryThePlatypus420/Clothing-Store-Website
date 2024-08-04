import React from "react";
import './SummerCollection.css';
import ProductCard from "../components/ProductCard";
import products from "../products";

function SummerCollection() {
    // Get the last 6 items from the products array
    const summer_collection = products.slice(24, 30);
    console.log(products[25]);

    return (
        <div className="summer24">
            <span>
                <h1>Drop '24</h1>
                <h3>Summer Collection</h3>
            </span>

            <div className="container my-5">
                <div className="row my-4">
                    {summer_collection.map((product) => (
                        <div key={product.id} className="col-md-4 my-3">
                            <ProductCard 
                                id={product.id} 
                                title={product.title} 
                                price={product.price} 
                                img={product.img} 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SummerCollection;