import React from "react";
import './Categories.css';
import pants from '../assets/trousers.png';
import tee from '../assets/tshirt.png';
import shirt from '../assets/shirt.png';
import shoes from '../assets/shoes.png';
import ring from '../assets/ring.png';
import { Link } from "react-router-dom";

function Categories() {

  const categories = [
    { category: "Tees", img: tee },
    { category: "Button-Shirts", img: shirt },
    { category: "Pants", img: pants },
    { category: "Shoes", img: shoes },
    { category: "Accessories", img: ring }
  ];

  return (
    <>
      <h1 style={{ marginTop: "30px" }}>Categories</h1>
      <div className="categories">
        {categories.map((item, index) => (
          <div className="category-item" key={index}>
            <Link to={`/category/${item.category}`} className="img-div">
              <img src={item.img} alt={item.category} className="category-img" />
            </Link>
            <p>{item.category}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Categories;
