import { 
    SUBSCRIBER_LOGIN_REQUEST,
    SUBSCRIBER_LOGIN_SUCCESS,
    SUBSCRIBER_LOGIN_FAIL,
    SUBSCRIBER_LOGOUT,
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
