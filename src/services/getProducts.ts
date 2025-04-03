import {
  API_URL,
  API_KEY
} from "../constants";
import { FetchProductsResponse } from "../interfaces/getProducts";
import { Product } from "../interfaces/types";

export const getProducts = async ({ filter = "", page = 1 }) => {
  try {
    const res = await fetch(`${API_URL}/wlm/walmart-search-by-keyword?keyword=${filter}&page=${page}&sortBy=best_match`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-rapidapi-key": API_KEY
      },
    });
    const data = await res.json() as FetchProductsResponse;
    const products: Product[] = data.item.props.pageProps.initialData.searchResult.itemStacks[0].items.map((item) => ({
      id: item.id ?? "",
      name: item.name ?? "",
      price: item.price ?? 0,
      image: item.image ?? "",
      description: item.description ?? "",
    }));
    return products ?? [];

  } catch (error) {
    console.log(error);
    return [];
  }
}
