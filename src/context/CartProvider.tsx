import { useState } from "react";

import { CartContext } from "./CartContext"
import { Product } from "../interfaces/types";

interface Props {
  children: React.ReactNode;
}

export const CartProvider: React.FC<Props> = ({ children }) => {
  const [productsList, setProductsList] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState(0);
  const [filter, setFilter] = useState("computer");

  const addProducts = (products: Product[]) => {
    setProductsList(prev => ([...prev, ...products]));
  };

  const cleanProducts = () => {
    setProductsList([]);
  };

  const removeProduct = (product: Product) => {
    setProductsList(productsList.filter((p) => p.id !== product.id));
  };

  const addCartItems = () => {
    setCartItems(prev => prev + 1);
  };

  const removeCartItems = () => {
    setCartItems(prev => Math.max(prev - 1, 0));
  };

  const resetApp = () => {
    setProductsList([]);
    setCartItems(0);
    setFilter("computer");
  }

  return (
    <CartContext.Provider value={{
      productsList,
      cartItems,
      filter,
      addProducts,
      removeProduct,
      cleanProducts,
      addCartItems,
      removeCartItems,
      setFilter,
      resetApp
    }}>
      {children}
    </CartContext.Provider>
  )
}
