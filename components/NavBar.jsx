import React from 'react';
import Link  from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';

import { Cart } from './';
import { useStateContext } from '../context/StateContext';

const NavBar = () => {
  // totalQuantities = No of items in the cart
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">WEBM Headphones</Link>
      </p>

      <button type="button"
      className="cart-icon" onClick={() => setShowCart(true)}>
      <AiOutlineShopping />
      <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      {showCart && <Cart/>}
    </div>
  )
}

export default NavBar