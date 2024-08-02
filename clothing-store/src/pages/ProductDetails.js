import React from "react";
import { MdStar } from "react-icons/md";
import { HiOutlineArrowCircleRight } from "react-icons/hi";

function Product() {
  return (
    <div className="container py-3">
      <div className="row mt-4">
        <div className="col-md-4 col-sm-6 mb-4">
          {/* Product Image */}
          <div className="overflow-hidden rounded">
            <img
              src="https://i.imgur.com/zryxaH8.jpg"
              alt="Product-Image"
              className="img-fluid"
            />
          </div>
        </div>
        {/* Product Details */}
        <div className="col-md-8 col-sm-6 d-flex flex-column justify-content-around">
          <div>
            {/* Product Title */}
            <h1 className="h3 fw-bold">Burger</h1>
            {/* Product Description */}
            <p className="mt-3 text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed enim ut sem viverra aliquet eget sit. Odio facilisis mauris sit amet
            </p>
            
            {/* Product Price */}
            <span className="h4 fw-bold">$20</span>
          </div>
          {/* Quantity Input and Order Button */}
          <div>
            <div className="mb-3">
              {/* Quantity Label */}
              <label className="fw-bold">Quantity</label>
              {/* Quantity Input */}
              <input
                className="form-control"
                type="number"
                min="1"
                defaultValue="1"
                required
              />
            </div>
            {/* Order Button */}
            <div>
              <button
                className="btn btn-danger w-100 d-flex justify-content-center align-items-center gap-2"
                title="Confirm Order"
              >
                <span>Confirm Order</span>
                <HiOutlineArrowCircleRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Product;