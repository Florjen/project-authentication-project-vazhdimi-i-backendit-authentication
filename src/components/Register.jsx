import React from "react"
import { useState } from "react"
import {useNavigate} from 'react-router-dom'

const Register = () =>{
    const navigate = useNavigate()

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [image,setImage] = useState(null)
    const [fullName,setFullName] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append("email", email);
        formData.append("fullName", fullName);
        formData.append("password", password);
        formData.append("image", image);
        const dergoTeDhenatNeBackend = await fetch(
          "http://localhost:5001/api/users/register",
          {
            method: "POST",
            body: formData,
          }
        );
        navigate("/login")
      };
  

    return (
<div className="login-wrapper">
<form onSubmit={handleSubmit}>
            <label>
                <h1>Regjistrimi i perdoruesit</h1>
              <p>Emri i Plote</p>
              <input type="text" name='fullName' value={fullName} onChange={(e) => setFullName(e.target.value)}/>
            </label>
            <label>
              <p>Email</p>
              <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <label>
              <p>Password</p>
              <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <label>
              <p>Image</p>
              <input type="file" name='image'  onChange={(e) => setImage(e.target.files[0])}/>
            </label>
            <div>
              <button type="submit">Regjistrohu</button>
            </div>
          </form>
</div>
    )

}
export default Register