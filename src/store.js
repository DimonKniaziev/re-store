import { create } from "zustand";

import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "./reducers";

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;

export const useBooks = create((set, get) => ({
    books: [
        {id: 1, title: 'Production-Ready Microservices', author: 'Susan J. Fowler', price: 32, coverImage: '#'},
        {id: 2, title: 'Release It!', author: 'Michael T. Nygard', price: 45, coverImage: '#'}
    ],
    loading: true,
    error: false
}));

export const useShoppingCart = create (set => ({

}))