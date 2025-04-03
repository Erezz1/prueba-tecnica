import { useContext, useEffect, useState, useCallback } from "react";
import { ClockLoader } from "react-spinners";

import { ProductCard } from "./ProductCard";
import { getProducts } from "../services/getProducts";
import { CartContext } from "../context/CartContext";
import { Product } from "../interfaces/types";
import { DATA_SET_VALUE } from "../constants";

export const ProductsList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFetching, setIsFetching] = useState(false);
  const [page, setPage] = useState(1);
  const { productsList, filter, addProducts } = useContext(CartContext)!;

  const handleDragStart = (e: React.DragEvent, product: Product) => {
    e.dataTransfer.setData(DATA_SET_VALUE, JSON.stringify(product));
  };

  const fetchProducts = useCallback(async () => {
    setIsFetching(true);
    try {
      const data = await getProducts({ filter, page });
      addProducts(data);
      setPage(prev => prev + 1);
      window.scrollBy({ top: -100, behavior: "smooth" });

    } finally {
      setIsFetching(false);
      setIsLoading(false);
    }
  }, [filter, page, addProducts]);

  useEffect(() => {
    setPage(1);
    setIsLoading(true);
    fetchProducts();
  }, [filter]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 200 &&
        !isFetching
      ) {
        fetchProducts();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [fetchProducts, isFetching]);

  if (isLoading) {
    return (
      <div className="w-full flex flex-col gap-5 items-center py-12">
        <ClockLoader size={100} color="var(--color-cyan-500)" />
        <p className="text-xl text-cyan-500">Buscando productos</p>
      </div>
    );
  }

  if (productsList.length < 0) {
    return (
      <div className="w-full flex flex-col gap-5 items-center py-12">
        <p className="text-xl text-cyan-500">No se encontraron productos</p>
      </div>
    );
  }

  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {productsList.map((product, index) => (
        <ProductCard key={`${product.id}-${index}`} product={product} onDragStart={handleDragStart} />
      ))}
    </div>
    {isFetching && (
      <div className="w-full flex justify-center py-4">
        <ClockLoader size={50} color="var(--color-cyan-500)" />
      </div>
    )}
    </>
  );
};
