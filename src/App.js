
import React from 'react';
// import ReactDOM from 'react-dom';
import Register from './components/registerComp/Register'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/homeComp/Home';
import Login from './components/loginCom/Login';
import Blog from './components/blogComp/Blog';
import Watchlive from './components/watchliveComp/Watchlive';
import Navbar2 from './components/services/navbarCom/Navbar2';
import Aboutus from './components/aboutusComp/Aboutus';
import Madeltable from './components/aboutusComp/Madeltable';
import Madel from './components/madelComp/Madel';
import Schedule from './components/aboutusComp/Schedule';
import Userlist from './components/AdminPanel/UserList/Userlist';
import Swimming from './components/watchgame/Swimming';
import Gymanistic from './components/watchgame/Gymanistic';
import Track from './components/watchgame/Track';






function App() {
  return (
    <>
   <BrowserRouter>
<Routes>
  <Route  path="/" element={<Home/>}/>
  <Route  path="/Register" element={<Register/>}/>
  <Route  path="/Login" element={<Login/>}/>
  <Route  path="/profile" element={<Watchlive/>}/>
  <Route  path="/blog" element={<Blog/>}/>
  <Route  path="/aboutus" element={<Aboutus/>}/>
  <Route  path="/madel" element={<Madel/>}/>
  <Route  path="/watchlive" element={<Watchlive/>}/>
  <Route  path="/madelTable" element={<Madeltable/>}/>
  <Route  path="/schedule" element={<Schedule/>}/>
  <Route  path="/Dashboard" element={<Userlist/>}/>
  <Route  path="/Swimming" element={<Swimming/>}/>
  <Route  path="/Gymnastic" element={<Gymanistic/>}/>
  <Route  path="/Track" element={<Track/>}/>
  </Routes>
  </BrowserRouter>  
   
 
 
  
    </>
  );
}
export default App;
