import {useContext} from 'react'
import { Link } from "react-router-dom";
import { UserContext } from '../context/User-Context'
import Navbar from './NavBar';
const Home = () =>{
const {state} = useContext(UserContext)
const {user} = state
//console.log(state)
return (
    <div>
      <Navbar/>
       {
        user ? <p> Emri juaj:{user.fullName} </p>: null
       }
         <Link to="/users/profile">Go to  Profile</Link>
        
    </div>

)




}
export default Home