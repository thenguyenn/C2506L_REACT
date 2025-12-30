import { useState, cloneElement } from "react";
import Menu from "./Menu";

function Layout({ user, setUser, children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1, addedAt: Date.now() }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    setCartItems((prev) =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  // Clone children và truyền props cần thiết
  const childrenWithProps = cloneElement(children, {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart
  });

  return (
    <>
      <Menu user={user} setUser={setUser} cartItems={cartItems} />
      {childrenWithProps}
    </>
  );
}

export default Layout;