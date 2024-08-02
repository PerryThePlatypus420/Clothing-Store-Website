import React from "react";
import products from "../products";
import { useParams } from "react-router-dom";
import { CartContext } from "../cartContext";
import { useContext } from "react";
import { FaCartPlus } from "react-icons/fa";

function Product() {
  const { addItemToCart } = useContext(CartContext);
  const { id } = useParams();
  const product = products.find((product) => product.id == id);
  const [items, setItems] = React.useState(1);

  return (
    <div className="container py-5">
      <div className="row mt-4">
        <div className="col-md-6 mb-4">
          {/* Product Image */}
          <div className="overflow-hidden rounded shadow-sm">
            <img
              src={product.img}
              alt="Product-Image"
              className="img-fluid w-100"
              style={{ maxHeight: "500px", objectFit: "cover" }}
            />
          </div>
        </div>
        {/* Product Details */}
        <div className="col-md-6 d-flex flex-column justify-content-between">
          <div>
            {/* Product Title */}
            <h1 className="h3 fw-bold text-black">{product.title}</h1>
            {/* Product Description */}
            <p className="mt-3 text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed enim ut sem viverra aliquet eget sit. Odio facilisis mauris sit amet.
            </p>
            {/* Product Price */}
            <span className="h4 fw-bold text-black">Rs. {product.price}</span>
          </div>
          {/* Quantity Input and Order Button */}
          <div className="mt-4">
            <div className="mb-3">
              {/* Quantity Label */}


              <div className="d-flex flex-row align-items-center justify-content-between gap-3">
                <label className="fw-bold">Quantity</label>
                {/* Quantity Input */}
                <input
                  className="form-control"
                  type="number"
                  min="1"
                  required
                  onChange={(e) => setItems(e.target.value)}
                  value={items}
                  style={{ maxWidth: "100px" }}
                />

                {/* Order Button */}
                <button
                  className="btn btn-dark d-flex justify-content-center align-items-center gap-2 flex-grow-1"
                  title="Confirm Order"
                  onClick={() => addItemToCart(id, items)}
                >
                  <FaCartPlus /> <span>Add to Cart</span>
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
