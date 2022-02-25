import { createStore, combineReducers } from 'redux';
import {mainReducer} from "./actions";

const reducer = combineReducers({
    main: mainReducer
})

const store = createStore(reducer)

export { store }
