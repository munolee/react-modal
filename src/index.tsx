import React from 'react';
import ReactDOM from 'react-dom';
import Root from './app/index';
import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";
import modalReducer from "./app/modules/modals";

const rootReducer = combineReducers({
    modals: modalReducer
});
const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>, document.getElementById('app')
);