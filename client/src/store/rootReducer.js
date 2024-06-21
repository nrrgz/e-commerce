import { combineReducers } from 'redux';
import productReducer from './slices/productSlice'
import categoryReducer from './slices/categorySlice';
import cartReducer from './slices/cartSlice';

const rootReducer = combineReducers({
  products: productReducer,
  categories: categoryReducer,
  cart: cartReducer,
});

export default rootReducer;
