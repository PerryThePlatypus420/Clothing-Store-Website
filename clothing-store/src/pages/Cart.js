import React, { useEffect, useState, useContext } from 'react';
import CartProductCard from '../components/CartProductCard';
import products from '../products';
import { CartContext } from '../cartContext';
import {Link} from 'react-router-dom';


function Cart() {

  const { cart } = useContext(CartContext);

  const total = Object.keys(cart).reduce((acc, productId) => {
    if (productId === 'count') return acc;
    const product = products.find(product => product.id == productId);
    return acc + product.price * cart[productId];
  }, 0);

  return (
    <div className="cart mt-5">
      <h1 className='mb-4'>Cart</h1>
      <div className='row'>
        {
          cart.count === 0 && <h3>Your cart is empty</h3>
        }
        {Object.keys(cart).map(productId => {
          if (productId === 'count') return null;
          const product = products.find(product => product.id == productId);
          return (
            <div className='col-md-8 col-sm-10 offset-md-2 offset-sm-1'>
              <CartProductCard
                id={product.id}
                title={product.title}
                price={product.price}
                img={product.img}
                count={cart[productId]}
              />
            </div>
          );
        }
        )}

        {cart.count > 0 && <h4>Total Items: {cart.count}</h4>}
        {cart.count > 0 && <h4>Total: Rs. {total}</h4>}
        {cart.count > 0 && (total >= 2500 ? <h4>You have got free delivery!</h4>: <h4>Rs. {2500 - total} to go for free delivery!</h4>)}

      </div>
      {cart.count > 0 ? <button className='btn btn-dark mt-5'>Checkout</button> : <Link to='/' className='btn btn-dark mt-5'>Continue Shopping</Link>}
    </div>
  );
}

export default Cart;
