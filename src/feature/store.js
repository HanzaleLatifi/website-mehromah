import {configureStore} from '@reduxjs/toolkit'
 import {composeWithDevTools} from 'redux-devtools-extension';
import authReducer from '../feature/auth/authSlice'
import profileReducer from './profile/profileSlice';

const store=configureStore({
    reducer:{
        auth:authReducer,
        profile:profileReducer,
    } 
})
export default store;