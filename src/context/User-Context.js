import { createContext,useReducer, useEffect} from "react";







 const UserContext = createContext()


//usereducer
const userReducer = (state,action) =>{
        switch(action.type){
            case "LOGIN":
        return {...state,user:action.payload}
            case "LOGOUT":
        return {...state,user:null}
                default:
        return state
        }
}

const initialState = {
    user:null,
}

//Krijojme funksionin e provider
const UserProvider = ({children}) =>{



const [state,dispatch] = useReducer(userReducer,initialState)
useEffect(() => {
    dispatch({
      type: "LOGIN",
      payload: JSON.parse(window.localStorage.getItem("user")),
    });
  }, []);
return( 
<UserContext.Provider value={{state,dispatch}}>{children}</UserContext.Provider>
) 
}
 
export {UserProvider,UserContext}
