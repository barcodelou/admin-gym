import API_ROUTE from "../../../../apiRoute";
import axios from 'axios'
import setAuthorizationToken  from "../../../../authorization/authorization";
import  {history} from '../../../../history'
import { BEFORE_STATE,  LOGIN_ERROR, LOGOUT_SUCCESS,LOGIN_SUCCESS,FETCH_USER,FETCH_USER_ERROR} from '../authTypes'


export const SignIn = (credentials) => {
  return async (dispatch) => {
      dispatch({ type: BEFORE_STATE }) 
    try {
      const res = await axios.post(`${API_ROUTE}/user/login`, credentials)
      let userData = res.data.response
      localStorage.setItem("token", userData.token)
      localStorage.setItem('user_data', JSON.stringify(userData));
      setAuthorizationToken(userData.token)
      dispatch({ type: LOGIN_SUCCESS, payload: userData })
    } catch(err) {
      dispatch({ type: LOGIN_ERROR, payload: err.response.data.error })
    }
  }
}
export const FetchUser = () => {



  return async (dispatch) => {
    dispatch({ type: BEFORE_STATE })
    try {
      const res  = await axios.get(`${API_ROUTE}/news`)
      dispatch({ type: FETCH_USER, payload: res.data })
    } catch(err){
      dispatch({ type: FETCH_USER_ERROR, payload: err.response ? err.respons.data.error : "" })
    }
  }
}

export const SignOut = () => {
  return (dispatch) => {
    localStorage.removeItem("token")
    setAuthorizationToken(false)
    dispatch({ type: LOGOUT_SUCCESS })
    window.localStorage.clear(); 
    history.push('/login');
  }
}

