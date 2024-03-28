import React from 'react'
import olympic from'./images/olympic.mp4'
import "./Home.css"
import Navbar from '../services/navbarCom/Navbar'
import Footer from '../services/footerCom/Footer'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <>
    <Navbar/>
    <div className="container01">
    <video src={olympic} autoplay loop muted playsInline  className="back-video"/>
    <div> <h1 className='wel'>Welcome to Payris FunOlympic 2024</h1><br/>
        <p className='discover'> Discover the fun side of Olympic events, exciting competitions, and more!</p>
        <p className='discover'>Create an account and watch all the live action.</p>
     <Link to = "/Login"> <button className='create'>Watch Live Games</button></Link> 
      </div>
    
</div>

<div className="container2">
    <div className="ol">
       <h1>OLYMPIC GAMES</h1>
    </div>
    <div className="ol1">
<p className='pd'> The Olympic Games are the world's only truly global,
    multi-sport, celebratory athletics competition. With 
    more than 200 countries participating in over 400 events 
    across the Summer and Winter Games,the Olympics are 
    where the world comes to compete, feel inspired, and 
    be together.</p>
    </div>
</div>

<div className="live_event">
    <div className="lives">
       <h2>Live Events Games</h2>
       <div className="live1">
           <div className="lvideo1">
               <div className="video1"></div>
           </div>
           <div className="lvideo2">
               <div className="video2"></div>
           </div>
           <div className="lvideo3">
               <div className="video3"></div>
           </div>
       </div>
       <div className="live2">
           <div className="lvideo4">
               <div className="video4"></div>
           </div>
           <div className="lvideo5">
               <div className="video5"></div>
           </div>
           <div className="lvideo6">
               <div className="video6"></div>
           </div>
       </div>
    </div>
   </div>


   <div className="container2">
    <div className="ol">
       <h1 >Want To watch Live games</h1>
    </div>
    <div className="ol1">
 <Link to ="/Login"> <p><button className="btn">Click here to Watch</button></p> </Link>
    </div>
</div>

<div className="future">
   <h1>FunOlympic 2024 is Game Happening in Payris</h1>
</div>

    <div className="paris">
      <div className="date">
          
          <h1>PAYRIS</h1>
          <h1>2024</h1>
       </div>

</div>
<div className="game">
<h1>PAST GAME</h1>
</div>
<div className="past-game">
<h1 id="hi">BEIJING 2022</h1>
<h1 id="hi">TOKYO 2020</h1>
<h1 id="hi">PYEONGCHANG 2018</h1>
<h1 id="hi">RIO 2016</h1>
<h1 id="hi">SOCHI 2014</h1>
<h1 id="hi">LONDON 2012</h1>
<h1 id="hi">VONCOUVER 2010</h1>
<h1 id="hi"> BEIJING 2008</h1>
<h1 id="hi">TURIN 2006</h1>
<h1 id="hi">ATHENS 2004</h1>

</div>
<Footer/>
    
    </>
  )
}

export default Home