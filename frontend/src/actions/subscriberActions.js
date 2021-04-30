import axios from 'axios'
import { 
    SUBSCRIBER_LOGIN_REQUEST,
    SUBSCRIBER_LOGIN_SUCCESS,
    SUBSCRIBER_LOGIN_FAIL,

    SUBSCRIBER_LOGOUT,

    SUBSCRIBER_REGISTER_REQUEST,
    SUBSCRIBER_REGISTER_SUCCESS,
    SUBSCRIBER_REGISTER_FAIL,
} from '../constants/subscriberConstants'


export const slogin = (subemail, subpassword) => async (dispatch) => {
    try{
        dispatch({
            type:SUBSCRIBER_LOGIN_REQUEST
        })

        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }

        const {data} = await axios.post(
            '/api/users/slogin/',
            {'username':subemail, 'password':subpassword},
            config
        )

        dispatch({
            type:SUBSCRIBER_LOGIN_SUCCESS,
            payload:data
        })

        localStorage.setItem('subscriberInfo', JSON.stringify(data))

    }catch(error){
        dispatch({
            type : SUBSCRIBER_LOGIN_FAIL,
            payload : error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })
    }
}



export const slogout = () => (dispatch) => {
    localStorage.removeItem('subscriberInfo')
    dispatch({type:SUBSCRIBER_LOGOUT})
}



export const sregister = (subname, subemail, subpassword) => async (dispatch) => {
    try{
        dispatch({
            type:SUBSCRIBER_REGISTER_REQUEST
        })

        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }

        const {data} = await axios.post(
            '/api/users/sregister/',
            {'name':subname,'subemail':subemail, 'password':subpassword},
            config
        )

        dispatch({
            type:SUBSCRIBER_REGISTER_SUCCESS,
            payload:data
        })

        dispatch({
            type:SUBSCRIBER_LOGIN_SUCCESS,
            payload:data
        })
        localStorage.setItem('subscriberInfo', JSON.stringify(data))

    }catch(error){
        dispatch({
            type : SUBSCRIBER_REGISTER_FAIL,
            payload : error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })
    }
}



