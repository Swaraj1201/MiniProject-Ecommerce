import { 
    SUBSCRIBER_LOGIN_REQUEST,
    SUBSCRIBER_LOGIN_SUCCESS,
    SUBSCRIBER_LOGIN_FAIL,

    SUBSCRIBER_LOGOUT,

    SUBSCRIBER_REGISTER_REQUEST,
    SUBSCRIBER_REGISTER_SUCCESS,
    SUBSCRIBER_REGISTER_FAIL,
    
} from '../constants/subscriberConstants'


export const subscriberLoginReducer = (state = {},action) => {
    switch(action.type){
        case SUBSCRIBER_LOGIN_REQUEST:
            return{loading: true}

        case SUBSCRIBER_LOGIN_SUCCESS:
            return {loading:false, subscriberInfo: action.payload }
            
        case SUBSCRIBER_LOGIN_FAIL:
            return {loading:false, error: action.payload}

        case SUBSCRIBER_LOGOUT:
            return {}
            
        default:
            return state    
    }
}


export const subscriberRegisterReducer = (state = {},action) => {
    switch(action.type){
        case SUBSCRIBER_REGISTER_REQUEST:
            return{loading: true}

        case SUBSCRIBER_REGISTER_SUCCESS:
            return {loading:false, subscriberInfo: action.payload }
            
        case SUBSCRIBER_REGISTER_FAIL:
            return {loading:false, error: action.payload}

        case SUBSCRIBER_LOGOUT:
            return {}
            
        default:
            return state    
    }
}

