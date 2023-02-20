import { createContext } from "react";
import { useLocalStorage } from "../hooks/localStorage";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useLocalStorage("cartItem", []);
  console.log(cartItems);

  const handleAddToCart = (cartItem) => {
    const hasEqualId = (cItem) => cItem.id === cartItem.id;
    const alreadyInCartItem = cartItems.find(hasEqualId);
    if (alreadyInCartItem) {
      handleUpdateQuantity(cartItem.id, "increase");
    } else {
      const item = { ...cartItem, quantity: 1 };
      setCartItems((prevItems) => [...prevItems, item]);
    }
  };

  const handleUpdateQuantity = (id, type) => {
    const increaseValue = type === "increase" ? 1 : -1;
    const updatedItem = (i) =>
      i.id === id ? { ...i, quantity: i.quantity + increaseValue } : i;
    setCartItems((prevItems) =>
      prevItems.map(updatedItem).filter((i) => i.quantity)
    );
  };

  const resetCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, resetCart, handleAddToCart, handleUpdateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
