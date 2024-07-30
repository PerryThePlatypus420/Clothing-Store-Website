import React from "react";
import './Categories.css';
import pants from '../assets/trousers.png'
import tee from '../assets/tshirt.png'
import shirt from '../assets/shirt.png'
import shoes from '../assets/shoes.png'
import ring from '../assets/ring.png'

function Categories() {
  return (

    <div className="categories">

      <div className="category-item">
        <div className="img-div">
          <img src={tee} alt="pants" className="category-img" />
        </div>
        <p>Tees</p>
      </div>

      <div className="category-item">
        <div className="img-div">
          <img src={shirt} alt="pants" className="category-img" />
        </div>
        <p>Button Down Shirts</p>
      </div>

      <div className="category-item">
        <div className="img-div">
          <img src={pants} alt="pants" className="category-img" />
        </div>
        <p>Pants</p>
      </div>

      <div className="category-item">
        <div className="img-div">
        <img src={shoes} alt="pants" className="category-img" />
        </div>
        <p>Shoes</p>
      </div>

      <div className="category-item">
        <div className="img-div">
          <img src={ring} alt="pants" className="category-img" />
        </div>
        <p>Accessories</p>
      </div>

    </div>
  );
}

export default Categories;