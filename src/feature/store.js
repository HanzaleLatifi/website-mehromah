import {configureStore} from '@reduxjs/toolkit'
 import {composeWithDevTools} from 'redux-devtools-extension';
import authReducer from '../feature/auth/authSlice'
import cartReducer from './cart/cartSlice';
import profileReducer from './profile/profileSlice';

const store=configureStore({
    reducer:{
        auth:authReducer,
        profile:profileReducer,
        cart:cartReducer
    } 
})
export default store;