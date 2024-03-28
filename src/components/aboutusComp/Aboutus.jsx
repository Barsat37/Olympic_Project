import React from 'react'
import Navbar2 from '../services/navbarCom/Navbar2'
import "./Aboutus.css"
import { Link } from 'react-router-dom'
import Footer from '../services/footerCom/Footer'

const Aboutus = () => {
  return (
    <>
    <Navbar2/>
    <div className="bodoy">
   
    <div className="boody">
<div className="boody1">
 
</div>

<div className="booody2">
    <h1 className="h111">FUNOLYMPIC PARIS 2024</h1>
    <p className="pipe"> The vision of Paris 2024
        Paris 2024 will see a new vision of Olympism in action, delivered in a unique spirit of international celebration.
        
        We will offer one of the world’s most inspirational cities as a memorable stage for the athletes – and a truly global platform to promote them, and their incredible stories.
        
        And we will partner with the entire Olympic family to demonstrate that, more than ever after an extremely challenging period, sport has a unique power to help create a better world.
        
        Our plan features 95 percent existing or temporary venues, and every single one has a clear, defined legacy aligned with the city’s long-term development plans.
        
        The sporting celebration will flow along the Seine, from the new Olympic Village, just 15 minutes from Paris city centre, to such city centre landmarks as the Eiffel Tower and the Grand Palais.
        
        Paris has welcomed people from all over the world – including the founding fathers of the Olympic Movement – for hundreds of years, to collaborate and inspire each other; to shape ideas and forge the future.</p>
</div>
</div>
</div>
<div className="game">
    <h1>AROUND THE GAMES</h1>
 </div>
 
<div className="ingame">
 
     <div className="game1">
     <Link to="/schedule"><p>SCHEDULE</p></Link>

     </div>
 
 
     <div className="game2">
         <p></p>

     </div>
 
</div>
<div className="ingame2">
 
 <div className="game11">
     <p><span></span></p>

 </div>


 <div className="game22">
    <Link to="/madel"><a href="madel.html">MADELS</a></Link>


 </div>

</div>
<div id="infoTable">
    <p class="pyaris-name"><span id="i1">Fu</span><span id="i2">nO</span><span id="i3">ly</span><span id="i4">mp</span><span id="i5">ic </span> 2024</p>
    <table>
        <tr>
            <th>Date</th>
            <td>4 FEBRUARY - 1 April</td>
        </tr>
        <tr>
            <th>Country</th>
            <td>FRANCE</td>
        </tr>
        <tr>
            <th>Athletes</th>
            <td>2834</td>
        </tr>
        <tr>
            <th>Teams</th>
            <td>91</td>
        </tr>
        <tr>
            <th>Events</th>
            <td>109</td>
        </tr>
    </table>
    
</div>
<p className='conttactus'> Contact US</p>
<div className="conta">
    <div className="contact-us">
    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2627.0634147951064!2d2.342152176303296!3d48.81885147132681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDjCsDQ5JzEwLjUiTiAywrAyMCczNS4wIkU!5e0!3m2!1sen!2snp!4v1711473442045!5m2!1sen!2snp" ></iframe>
</div></div>
<div className="contact-detail">
    <div className="contact-det">
        <p className='contac'>
       International Olympic Committee (IOC) <br></br> <br></br>

Registered office:<br></br><br></br>

Maison Olympique<br></br>
 
Pyaris<br></br><br></br>

VAT & Company Identification Number<br></br><br></br>

CHE-106.029.126 TVA<br></br>
Phone no: +977 1 520 2667
        </p>
    </div>
</div>





<Footer/>
    </>
  )
}

export default Aboutus