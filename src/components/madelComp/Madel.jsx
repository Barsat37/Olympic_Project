import React from 'react'
import Navbar2 from '../services/navbarCom/Navbar2'
import "./Madel.css"
import Footer from '../services/footerCom/Footer'
import { Link } from 'react-router-dom'

const Madel = () => {
  return (
    <>
    <Navbar2/>
    <div className="body">
   
   <div className="boody">
       <div className="game05">
           <h1>OLYMPIC MADELS</h1>
        </div>

<div className="boody2">
  
   <p className="p"> The vision of Paris 2024
       Gold, silver and bronze medals are awarded to the top finishers in every event at the Olympic Games - a tradition that began at the St. Louis 1904 Olympic Games.</p>
</div>
</div>
</div>
<div className="madels">
   <div className="madels1">
       <div className="madels11"> 
           <h2> About the madels</h2>
       </div>
       
   </div>

   <div className="madels2">
       <p>The gold, silver and bronze medals awarded to competitors at the Olympics and Paralympics represent the highest levels of athletic achievement at the Games. The design of the medals is the responsibility of the host city's organizing committee, and varies with each edition of the Games.</p>
   </div>

</div>
<div className="games-table">
    <h1 className='madeltable'>MADEL TABLE</h1>
<p className="see">
    See the list of team and medals won by each.
</p>
<Link to="/madeltable"><button className="table">See Table</button></Link>
</div>
<Footer/>
    </>
  )
}

export default Madel