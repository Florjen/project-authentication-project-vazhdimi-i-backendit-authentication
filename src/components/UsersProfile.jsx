import { Link} from "react-router-dom";
import React, { useEffect,useContext,useState } from 'react';
import { UserContext } from '../context/User-Context';
import withAuth from "../helpers/withAuth";

const ProfilePage = () =>{

//const [user,setUser]= useState(null)
const {state,dispatch} = useContext(UserContext)
//const {user} = state
//useEffect(() =>{
 //localStorage.setItem("user",JSON.stringify(user)) 
//},[user])
//console.log(user)


useEffect(() => {
    fetch("http://localhost:5001/api/users/user", {
      method: "GET",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    })
      .then((result) => result.json())
      .then((data) => {
        //setUser(data);
        localStorage.setItem("user", JSON.stringify(data));
        dispatch({
          type: "LOGIN",
          payload: data,
        });
      }).catch((err) => {
        console.log(err);

        dispatch({
          type: "LOGIN",
          payload:null,
        });
      });
  }, []);

if(!state.user){
    return (
        <h2>Loading ....</h2>
    )
}

return(
    <div> 
    <p>Profile Page</p>


 
    <div>
      <div>
        <img src={`http://localhost:5001/images/users/${state.user.image}`} alt="" style={{width:"150px"}}/>
        <h3>{state.user.fullName}</h3>
      </div>
        <Link className="button" to="/home">Go Home</Link>
        <br/>
        
       <Link className="button" to={`/users/edit/${state.user._id}`}>Edit Profile</Link>  
        <br/>
        <Link className="button" to={`/users/delete/${state.user._id}`}>Delete Profile</Link>

       
    
  
 
      
 

    </div>
    
    </div>
  
)
}
export default withAuth(ProfilePage)

export const getServerSideProps = (ctx) =>{
return withAuth.isAuthorized(ctx)
}