import { legacy_createStore as createstore } from "redux";
import reducer from "./tasks";

const store = createstore(reducer);

export default store;