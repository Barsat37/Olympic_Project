import React from 'react'
import Navbar2 from '../services/navbarCom/Navbar2'
import "./Watchlive.css"
import Footer from '../services/footerCom/Footer';
import { Link } from 'react-router-dom';


const Watchlive = () => {
    
    
  return (

   <>
   <Navbar2/>
   <div className='head'>
    <h1 className='h1'>Welcome To Payris Funolympic 2024  Live Games</h1>
   </div>
   <div className="catagory">
    <p className='pp'>Select Category</p>
</div>


<div className='parent-container'>
    <div className="container1">
    <div  className="item01">
        <div  className="photo1">
        <img  className="olympic_games" src="images/watch1.webp"/>
        </div>
        <div  className="name">
        <p  className="p33">Swimming</p>
        <Link to="/Swimming"><button  className="live">LIVE</button></Link>
    </div>
    </div>
    <div  className="item02">
        <div  className="photo2">
        <img  className="olympic_games" src="images/watch2.webp"/>  
        </div>
        <div  className="name">
            <p  className="p33">Table Tannis</p>
            <button  className="live">LIVE</button>
        </div>
    </div>
    <div  className="item03">
        <div  className="photo3"> <img  className="olympic_games" src="images/watch3.webp"/></div>
        <div  className="name">
            <p  className="p33">Gymnastic</p>
           <Link to="/Gymnastic"><button  className="live">LIVE</button></Link> 
        </div>
    </div>
    </div>
</div>

<div  className="container2">
    <div  className="item01">
        <div  className="photo1"> <img  className="olympic_games" src="images/watch4.webp"/></div>
        <div  className="name">
            <p  className="p33">Track</p>
           <Link  to ="/track" ><button  className="live">LIVE</button></Link> 
        </div>
    </div>
    <div  className="item02">
        <div  className="photo2"><img  className="olympic_games" src="images/watch5.webp"/></div>
       <div  className="name">
        <p  className="p33">Badminton</p>
        <button  className="live"> LIVE</button>
    </div>
    </div>
    <div  className="item03">
        <div  className="photo3"><img  className="olympic_games" src="images/watch6.webp"/> </div>
        <div  className="name">
            <p  className="p33">Judo</p>
            <button  className="live">LIVE</button>
        </div>
    </div>

 </div>

<Footer/>
   
   
   </>
  )
}

export default Watchlive;