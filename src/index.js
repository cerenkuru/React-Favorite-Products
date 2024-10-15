// import React from 'react';
// import ReactDOM from 'react-dom';
// import { createRoot} from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
// import { combineReducers } from 'redux';
// import {createStore} from 'redux';
// import './index.css';
// import App from './App';
// import productReducer from './store/reducers/products';
// import ProductsProvider from './context/products-context'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import productReducer from './store/reducers/products';
import configureProductsStore from './hooks-store/products-store';

configureProductsStore();

// const rootReducer = combineReducers({
//   shop: productReducer
// });

// const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
  
);

// ReactDOM.render(
//   <ProducProvider store={store}>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </ProducProvider>,
//   document.getElementById('root')
// );
