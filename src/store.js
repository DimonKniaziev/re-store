import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "./reducers";

const logMiddleware = ({getState}) => (dispatch) => (action) => {
    console.log(action.type, getState());
    return dispatch(action);
}

const stringMiddleware = () => (dispatch) => (action) => {
    
    if(typeof action === 'string') {
        return dispatch({
            type: action
        });
    }

    return dispatch(action)
    
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware, stringMiddleware, logMiddleware));

const myAction = (dispatch) => {
    setTimeout(() => dispatch({
        type: 'SOME_ACTION'
    }), 2000);
};

store.dispatch(myAction);

store.dispatch('HELLO_WORLD');

export default store;