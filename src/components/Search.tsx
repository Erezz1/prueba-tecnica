import { useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { CartContext } from "../context/cartContext";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const Search: React.FC<Props> = ({ isOpen, onClose }) => {
  const { filter, setFilter, cleanProducts } = useContext(CartContext)!;
  const [search, setSearch] = useState(filter);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    setFilter(search);
    onClose();
    cleanProducts();
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-[#00000060] bg-opacity-50 z-20">
      <div className="bg-white p-4 rounded-lg shadow-lg w-96">
        <input
          type="text"
          className="w-full p-2 border rounded"
          placeholder="Buscar..."
          value={search}
          onChange={handleInputChange}
        />
        <button
          onClick={handleSearch}
          className="cursor-pointer mt-4 w-full bg-blue-500 text-white py-2 rounded"
        >
          Cerrar
        </button>
      </div>
    </div>,
    document.body
  );
};
