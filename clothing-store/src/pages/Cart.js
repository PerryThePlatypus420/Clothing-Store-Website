import React, {useContext } from 'react';
import CartProductCard from '../components/CartProductCard';
import products from '../products';
import { CartContext } from '../cartContext';
import { Link } from 'react-router-dom';

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
            <div className='col-md-8 col-sm-10 offset-md-2 offset-sm-1 mb-3'>
              <CartProductCard
                id={product.id}
                title={product.title}
                price={product.price}
                img={product.img}
                count={cart[productId]}
              />
            </div>
          );
        })}
      </div>
      {cart.count > 0 && (
        <div className="card bg-light mt-3 p-3">
          <div className="card-body">
            <h4 className="card-title">Summary</h4>
            <p className="card-text">Total Items: {cart.count}</p>
            <p className="card-text">Total: Rs. {total}</p>
            <p className="card-text">
              {total >= 2500 ? (
                <span className="text-success">You have got free delivery!</span>
              ) : (
                <span className='text-danger'>Rs. {2500 - total} to go for free delivery!</span>
              )}
            </p>
          </div>
        </div>
      )}
      <div className="mt-5">
        {cart.count > 0 ? (
          <Link to='/checkout' className='btn btn-dark btn-lg'>Checkout</Link>
        ) : (
          <Link to='/' className='btn btn-dark btn-lg'>Continue Shopping</Link>
        )}
      </div>
    </div>
  );
}

export default Cart;
