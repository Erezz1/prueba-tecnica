import { useState, useRef, useContext } from "react";

import { CartContext } from "../context/cartContext";
import { Product } from "../interfaces/types";
import { DATA_SET_VALUE } from "../constants";

import shoppingCartIcon from "../assets/shopping-cart.svg";
import greenArrow from "../assets/curved-arrow-green-icon.svg";

export const ShoppingCart = () => {
  const [isOver, setIsOver] = useState(false)
  const cartRef = useRef<HTMLDivElement>(null)
  const { cartItems, addCartItems, removeProduct } = useContext(CartContext)!;

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsOver(true);
  };

  const handleDragLeave = () => {
    setIsOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsOver(false);
    const prod =  JSON.parse(e.dataTransfer.getData(DATA_SET_VALUE)) as Product;
    removeProduct(prod);
    addCartItems();
  };

  return (
    <div className="flex justify-center py-6 border-b border-gray-200">
      <div className="relative flex items-center">
        <div className="absolute -left-16 z-10">
          <img
            src={greenArrow}
            alt="Green arrow"
            width={100}
            height={60}
            className="transform rotate-180 -scale-x-75"
          />
        </div>
        <div
          ref={cartRef}
          className={`relative border ${isOver ? "border-cyan-500" : "border-gray-300"} p-4 rounded transition-colors`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <img
            className="mx-auto"
            src={shoppingCartIcon}
            alt="Shopping cart"
            width={80}
            height={80}
          />
          <div className="absolute -top-3 right-0 bg-lime-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">
            {cartItems}
          </div>
          <p className="text-center text-cyan-500 mt-2">arrastra aqui tus productos</p>
        </div>
      </div>
    </div>
  )
}
