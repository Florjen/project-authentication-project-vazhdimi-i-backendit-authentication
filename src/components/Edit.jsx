import withAuth from '../helpers/withAuth'
import React from "react"
import { UserContext } from '../context/User-Context'
import { useContext } from 'react'
import { useState } from "react"
import {useNavigate} from 'react-router-dom'

const EditSingleUser = () =>{
    
    const navigate = useNavigate()
    const {state} = useContext(UserContext)

    const [fullName,setFullName] = useState(state.user.fullName)
    //const [password,setPassword] = useState('')
    const [email,setEmail] = useState(state.user.email)
//console.log(fullName)
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const lidhu = await fetch(`http://localhost:5001/api/users/edit/${state.user._id}`,{
         method:"PUT",
         headers:{"Content-Type":"application/json", },
             credentials:"include", //Pranojme kredencialet 
             body:JSON.stringify({
                fullName,
                 email,
                // password,
                
             })
        })
            navigate("/users/profile")
            console.log(lidhu)
        } catch (err) {
         console.log(err)
        }
     
      
      };


    return (
<div className="login-wrapper">
    <p>Edit Profile</p>
<form onSubmit={handleSubmit}>
            <label>
              <p>Emri i Plote</p>
              <input type="text" name='fullName' value={fullName} onChange={(e) => setFullName(e.target.value)}/>
            </label>
            <label>
              <p>Email</p>
              <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <div>
              <button type="submit">Perditeso</button>
            </div>
          </form>
</div>
    )

 }
export default withAuth(EditSingleUser)

export const getServerSide = (ctx) =>{
return withAuth.isAuthorized(ctx)

}