import { useContext, useState } from "react";

import { Search } from "./Search";
import { CartContext } from "../context/CartContext";

import searchIcon from "../assets/search-icon.png";

export const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const { resetApp } = useContext(CartContext)!;

  return (
    <>
    <header className="flex justify-between items-center p-6 bg-gray-100">
      <h1 className="text-3xl font-normal text-gray-600">e-Commerce Gapsi</h1>

      <button
        className="px-5 py-3 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200"
        onClick={() => resetApp()}
      >
        Reset
      </button>

      <button
        className="rounded-full h-12 w-12 flex items-center justify-center cursor-pointer hover:bg-gray-200"
        onClick={() => setOpenModal(true)}
      >
        <img
          src={searchIcon}
          alt="search"
          width={30}
          height={30}
        />
      </button>
    </header>

    <Search
      isOpen={openModal}
      onClose={() => setOpenModal(false)}
    />
    </>
  )
}
