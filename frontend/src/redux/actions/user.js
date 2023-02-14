import axios from 'axios';
import {server} from "../store"

export const loadUser = ()=> async(dispatch)=>{
    try {
        dispatch({
            type:"loadUserRequest",
        })

        const {data} = await axios.get(`${server}/me`,{
            credentials: 'include',
            withCredentials:false,
            headers:{
                'Access-Control-Allow-Credentials':true
            }
        })
        console.log(data)
        dispatch({
            type:"loadUserSuccess",
            payload:data.user
        })
    } catch (error) {
        dispatch({
            type:"loadUserFailure",
            payload:error.response.data.message
        })
    }
}