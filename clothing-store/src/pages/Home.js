import React from "react";
import Cover from '../components/Cover';
import Categories from '../components/Categories';
import SummerCollection from '../components/SummerCollection';
import ProductCard from "../components/ProductCard";

function Home() {

    const products = [
        {
            title: 'abc',
            price: '1000',
            img: 'https://via.placeholder.com/150'
        },
        {
            title: 'abc',
            price: '1000',
            img: 'https://via.placeholder.com/150'
        },
        {
            title: 'abc',
            price: '1000',
            img: 'https://via.placeholder.com/150'
        },
        {
            title: 'abc',
            price: '1000',
            img: 'https://via.placeholder.com/150'
        },
        {
            title: 'abc',
            price: '1000',
            img: 'https://via.placeholder.com/150'
        },
        {
            title: 'abc',
            price: '1000',
            img: 'https://via.placeholder.com/150'
        },
       
    ];
    return (
        <>
            <Cover />
            <Categories />
            <SummerCollection />

            <div className="container my-5">
                <div className="row my-4">
                {products.map((product, index) => (
                    <div className="col-md-4 my-3">
                        <ProductCard title={product.title} price={product.price} img={product.img} />
                    </div>
                ))}
                </div>
            </div>
        </>
    );
}

export default Home;