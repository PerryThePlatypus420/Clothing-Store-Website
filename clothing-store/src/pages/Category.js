import React from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import products from "../products";

function Category() {

    const { cat } = useParams();


    return (
        <div className="mt-5">
            <h1>{cat}</h1>

            <div className="container my-5">
                <div className="row my-4">
                {products.filter(product => product.category === cat).map((product, index) => (
                    <div className="col-md-4 my-3">
                        <ProductCard id={product.id} title={product.title} price={product.price} img={product.img} />
                    </div>
                ))}
                </div>
            </div>
        </div>
        
    );
}

export default Category;