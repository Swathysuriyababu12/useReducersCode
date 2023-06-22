import { createStore } from "redux";
import productReducer from "./reducers/product-reducer";

export const store = createStore(
    productReducer
)