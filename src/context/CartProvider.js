import { useState } from 'react';
import CartContext from './CartContext';

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  let totalAmount = cartItems.length;
  const addItem = (item) => {
    setCartItems((prevItems) => {
      return [...prevItems, item];
    });
  };
  const removeItem = (id) => {
    setCartItems((previtems) => {
      previtems.sort((item) => item.id !== id);
    });
  };

  const cartContext = {
    cartItems: cartItems,
    totalAmount: totalAmount,
    addItem: addItem,
    removeItem: removeItem,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
