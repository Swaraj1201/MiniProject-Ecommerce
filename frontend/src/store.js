import { createStore, combineReducers , applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { productListReducer, productDetailsReducer } from './reducers/productReducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import { cartReducer } from './reducers/cartReducers'
import { userLoginReducer, userRegisterReducer, userDetailsReducer, userUpdateProfileReducer } from './reducers/userReducers'
import { subscriberLoginReducer, subscriberRegisterReducer } from './reducers/subscriberReducers'

const reducer = combineReducers({
    productList : productListReducer, 
    productDetails : productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    subscriberLogin: subscriberLoginReducer,
    subscriberRegister: subscriberRegisterReducer,
})


const cartItemsFromStorage = localStorage.getItem('cartItems') ?
        JSON.parse(localStorage.getItem('cartItems')) : []

const userInfoFromStorage = localStorage.getItem('userInfo') ?
        JSON.parse(localStorage.getItem('userInfo')) : null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ?
        JSON.parse(localStorage.getItem('shippingAddress')) : {}

const subscriberInfoFromStorage = localStorage.getItem('subscriberInfo') ?
        JSON.parse(localStorage.getItem('subscriberInfo')) : null        

const initialState = {
    cart: { 
        cartItems: cartItemsFromStorage, 
        shippingAddress: shippingAddressFromStorage, 
     },
    userLogin: { userInfo: userInfoFromStorage },
    subscriberLogin: { subscriberInfo: subscriberInfoFromStorage }


}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store