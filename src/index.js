
import axios from "axios";
import store from "./store/configureStore";
import { setProducts } from "./store/products";

const getProducts = async () => {
    const products = await axios.get(`https://fakestoreapi.com/products`);
    store.dispatch(setProducts({products:products.data}));
}
getProducts()