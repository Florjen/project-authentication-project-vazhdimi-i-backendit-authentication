import React from 'react';
import { BrowserRouter , Routes, Route, } from 'react-router-dom';
import ProfilePage from './UsersProfile'
import About from './About';
import Contact from './Contact';
import LoginPage from './Login';
import Home from './Home';
import Register from './Register'
import EditSingleUser from './Edit';
import DeleteUserPage from './Delete';



const AppRouter = () => {
    return ( 
<BrowserRouter>
<Routes>
<Route path='/home' element={<Home/>}/>
<Route path='/users/profile'element={<ProfilePage/>}/>
<Route path='/about'element={<About/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path='/login' element={<LoginPage/>}/>
<Route path='/register' element={<Register/>}/>
<Route path='/users/edit/:id' element={<EditSingleUser/>}/>
<Route path="/users/delete/:id" element={<DeleteUserPage/>}/>
</Routes>
</BrowserRouter>

)
}

// id e ke dinamike qe rues ndryshon   dhe nuk eshte nje route fikse apo egzakte 

export default AppRouter