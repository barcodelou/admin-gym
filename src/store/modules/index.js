import { combineReducers } from "redux"
import authReducer  from './auth/reducer/authReducer'
import { postsState }  from "./news/reducer/postsReducer";
import { classState } from "./class/reducer/classReducer"





const reducer = combineReducers({
  Auth: authReducer,
  Class:classState,
  News:postsState
  
})

export default reducer

