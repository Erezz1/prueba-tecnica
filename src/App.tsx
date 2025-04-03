import { ShoppingCart } from "./components/ShoppingCart";
import { CartProvider } from "./context/CartProvider";
import { ProductsList } from "./components/ProductsList";
import { Header } from "./components/Header";

export const App = () => {
  return (
    <CartProvider>
      <div className="max-w-6xl mx-auto bg-white">
        <Header />
        <ShoppingCart />
        <ProductsList />
      </div>
    </CartProvider>
  )
}
