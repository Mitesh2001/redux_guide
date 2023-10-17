import axios from "axios";
import store from "./store/configureStore";
import { addEmployee } from "./store/employees";
import { fetchProducts } from "./store/products";

// const fetchProducts = async () => {
//     try {
//         const response = await axios.get(`https://jsonplaceholder.typicode.com/todos`);
//         store.dispatch(getProducts({ products: response.data }));
//     } catch (error) {
//         store.dispatch({type:"SHOW_ERROR",payload:{error:error.message}})
//     }
// }
// fetchProducts();

store.dispatch({type : 'SHOW_ERROR', payload : {error : "User not Found !"}});