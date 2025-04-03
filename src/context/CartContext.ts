import { createContext } from "react";

import { CartStore } from "../interfaces/types";

export const CartContext = createContext<CartStore | null>(null);
