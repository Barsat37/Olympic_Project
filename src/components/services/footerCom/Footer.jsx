import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <>
    
    
    <section className="foter">
    <div className="foter-content">
        <div>
        <img className="image" src="images/paris2024.webp"/>
        <p className='Paris'>Payris olympic Committee</p>
        <div className="icons1">
            <a href="#"><i className='bx bxl-facebook-circle' ></i> </a>
            <a href="#"> <i className='bx bxl-twitter' ></i></a>
            <a href="#"> <i className='bx bxl-instagram-alt' ></i></a>
            <a href="#"> <i className='bx bxl-youtube' ></i></a>
        </div>
      </div>
      <div className="icons">
            <h2 className='h2'>Olympic Games</h2>
            <li> <a href='#'>Pyris 2024</a></li>
            <li> <a href='#'> Results & Medals</a></li>
            <li> <a href='#'>Replays & Highlights</a></li>
            <li> <a href='#'>All Olumpic Games</a></li> 
      </div>
        <div className="icons">
            <h2 className='h2'>Olympic Channel</h2>
            <li> <a href='#'> TV Channel</a></li>
            <li> <a href='#'>Live Events</a></li>
            <li> <a href='#'>Originsl Seeies</a></li>
            <li> <a href='#'> Corporate</a></li>
        
         
      </div>
      <div className="icons">
        <h2 className='h2'>News</h2>
        <li> <a href='#'>Podcast</a></li>
        <li> <a href='#'>Topics</a></li>
        
         
      </div>
   </div>
   <div className="contact">
    <h1  className='contactus'>Contact Us</h1>
   <div className="media">
   <img className="im" src="images/twitter.svg"/>
   <img className="im" src="images/facebook.svg"/>
   <img className="im" src="images/insta.svg"/>
   <img className="im" src="images/youtube.svg"/>
   </div>
   </div>
   
   
 </section>
</>
  )
}

export default Footer