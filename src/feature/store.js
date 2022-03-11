import {configureStore} from '@reduxjs/toolkit'
 import {composeWithDevTools} from 'redux-devtools-extension';
import authReducer from '../feature/auth/authSlice'

const store=configureStore({
    reducer:{
        auth:authReducer
    } 
})
export default store;