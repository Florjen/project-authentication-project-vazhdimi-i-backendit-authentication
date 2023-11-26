import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation
import { useContext } from 'react';
import { UserContext } from '../context/User-Context';
//import { useNavigate} from "react-router-dom";
import '../css/Navbar.css'
const Navbar = () => {
  //const navigate = useNavigate()
    const {state,dispatch} = useContext(UserContext)
    const {user} = state
    const logout = async () =>{
  const logout = await fetch("http://localhost:5001/api/users/logout",{
    method:"GET",
    credentials:"include",
    headers:{"Content-Type":"application/json"}
   })
   localStorage.removeItem("user")
   //navigate('/login')

    }
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        {
          user ? (
          <>
         <li>
          <Link to="/users/profile" onClick={logout}>Logout</Link>
        </li>
         <li>
        <Link to="/login">Login</Link>
        </li>
        </>
         ) : (
          <>
          <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
        <Link to="/register">Register</Link>
      </li>
      </>
         )}



        <li>
          <Link to="/users/profile">Profile</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
        <Link to="/register">Register</Link>
      </li>
      
      </ul>
    </nav>
  );
};

export default Navbar;