import { createStore } from "redux";
import TodoReducer from "../reducer/Reducer";

const Store = createStore(TodoReducer);

export default Store;