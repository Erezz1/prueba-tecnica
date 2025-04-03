export interface Product {
  id: string | undefined;
  name: string | undefined;
  price: number | undefined;
  image: string | undefined;
  description: string | undefined;
}

export interface CartStore {
  productsList: Product[];
  cartItems: number;
  filter: string;
  addProducts: (products: Product[]) => void;
  removeProduct: (product: Product) => void;
  cleanProducts: () => void;
  addCartItems: () => void;
  removeCartItems: () => void;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  resetApp: () => void;
}
