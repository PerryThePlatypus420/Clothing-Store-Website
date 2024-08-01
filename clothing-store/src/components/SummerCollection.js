import React from "react";
import './SummerCollection.css';
import ProductCard from "../components/ProductCard";


function SummerCollection(){

    const summer_collection = [
        {
            id: 1,
            title: 'Brown Tee',
            price: '1000',
            img: 'https://vibgyorclothing.com.pk/cdn/shop/files/BrownOversizedTee.png?v=1717928353&width=1445'
        },
        {
            id: 2,
            title: 'Blue Jeans',
            price: '3000',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp9sGI4cuM_RnXOOsS7XmqH3BUSkw_biH4OQ&s'
        },
        {
            id: 3,
            title: 'Black Tee',
            price: '1000',
            img: 'https://www.hudsonwellesley.com/cdn/shop/products/Black_Tee_Front_1024x1024@2x.png?v=1582411399'
        },
        {
            id: 4,
            title: 'Necklace',
            price: '1500',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLyQx-ayOalI1dTforyJ9n9yaHfsw-LORLVw&s'
        },
        {
            id: 5,
            title: 'Grey Shoes',
            price: '4000',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU1txhWNbC4RXw4mAHBzSOZcx0Vrn0k4xKzA&s'
        },
        {
            id: 6,
            title: 'Black Shirt',
            price: '2000',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6n3w2ukHadvh6V9Ov4sj227PfL6pHZUszsQ&s'
        },
       
    ];

    
    return(

        <div className="summer24">
            <span>
                <h1 >Drop '24</h1>
                <h3>Summer Collection</h3>
            </span>

            <div className="container my-5">
                <div className="row my-4">
                {summer_collection.map((product, index) => (
                    <div className="col-md-4 my-3">
                        <ProductCard id={product.id} title={product.title} price={product.price} img={product.img}  />
                    </div>
                ))}
                </div>
            </div>

        </div>
    );
}

export default SummerCollection;