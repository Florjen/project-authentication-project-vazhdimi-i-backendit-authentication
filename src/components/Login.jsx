import React,{useState} from 'react';
import { useNavigate } from "react-router-dom";
import '../css/Login.css'
const LoginPage = () =>{
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()
    console.log(email)



    const handleSubmit = async (e) =>{
        e.preventDefault()
       try {
       const lidhu = await fetch("http://localhost:5001/api/users/login",{
        method:"POST",
        headers:{"Content-Type":"application/json", },
            credentials:"include", //Pranojme kredencialet 
            body:JSON.stringify({
                email,
                password
            })
       })
           navigate("/users/profile")
           console.log(lidhu)
       } catch (err) {
        console.log(err)
       }
    }

    return(
        <div className="login-wrapper">
          <h1 className=''>Please Log In</h1>
          <form onSubmit={handleSubmit}>
            <label>
              <p>Email</p>
              <input type="text" name='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <label>
              <p>Password</p>
              <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      )

}

export default LoginPage



