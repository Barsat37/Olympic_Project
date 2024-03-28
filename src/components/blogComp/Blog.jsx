import React from 'react'
import "./blog.css"
import Navbar2 from '../services/navbarCom/Navbar2'
import Footer from '../services/footerCom/Footer'
import Navbar from '../services/navbarCom/Navbar';

const Blog = () => {
  return (
    <>
    <Navbar2/>
    <div className="home_bolg">
        <h1 className="Blog_name"> Blog</h1>
    </div>
    <div className="blog_container">
    <div className="blog_container1">
        
        <div className="blog1"><img  className="olympic_game" src="images/gymna.jpg"/></div>
        <h2 className="blog_game"> Gymnastics</h2>
        <p className="blog_disc">Olympic gymnasts are real-life superheroes. They fly through the air with the 
            greatest of ease. They complete feats of strength beyond our capabilities. There is a balance 
            and rhythm to every gymnastics competition. Fans sit and marvel while watching balance and </p>
        
        <div className="blog_learnMore">
          
       
            <p className="name1"> By Barsat KC / 7 March 2023</p>
            <a href="#">Learn More-</a>
        </div>
    </div>


    <div className="blog_container1">
        
        <div className="blog1"><img  className="olympic_game" src="images/swimming.jpg"/></div>
        <h2 className="blog_game"> Swimming</h2>
        <p className="blog_disc">Some Olympic swimming events go longer than we'd like. It's one reason swimming 
            falls just beneath track in this list. Somebody watching a relay who only cares about the result 
            of the race could head to the bathroom, make a sandwich and still catch the final cou 
         </p>
        
        <div className="blog_learnMore">
            <p className="name1"> By Barsat KC / 7 March 2023</p>
            <a href="#">Learn More-</a>
        </div>
    </div>


    <div className="blog_container1">
        
        <div className="blog1">
            <img className="olympic_game" src="images/vollyball.jpg"/>
        </div>
        <h2 className="blog_game"> Team Volleyball</h2>
        <p className="blog_disc">Team volleyball is the majority of the Olympics summarized in one sport. 
            Tremendous athletes you don't know play a sport you usually don't watch. You get the hang 
            of volleyball rules and regulations in time, however, and you find yourself actively </p>
        
        <div className="blog_learnMore">
        <p className="name1"> By Barsat KC / 7 March 2023</p>
        <a href="#">Learn More-</a>
        </div>
    </div>
    
    
    </div>
    


    
    <div className="blog_container">
        <div className="blog_container1">
            
            <div className="blog1"><img  className="olympic_game" src="images/judo.jpg"/></div>
            <h2 className="blog_game"> Judo</h2>
            <p className="blog_disc">Judo is a Japanese martial art that focuses on throws and grappling 
                techniques to subdue opponents, with an emphasis on physical fitness, mental discipline,
                 and sportsmanship. udo was invented by Jigoro Kano in Japan in 1882 as a safe and effective</p>
            
            <div className="blog_learnMore">
                <p className="name1"> By Barsat KC / 7 March 2023</p>
                <a href="#">Learn More-</a>
            </div>
        </div>
    
    
        <div className="blog_container1">
            
            <div className="blog1"><img className="olympic_game" src="images/Badminton.png"/></div>
            <h2 className="blog_game">Badminton </h2>
            <p className="blog_disc">Badminton is a racket-and-shuttle game played on a court by two players or doubles teams. The sport takes its name from Badminton House—home of the Duke of Beaufort in the English county of Gloucestershire.In 1873, the Duke is credited with bringing a version </p>
            
            <div className="blog_learnMore">
                <p className="name1"> By Barsat KC / 7 March 2023</p>
                <a href="#">Learn More-</a>
            </div>
        </div>
    
    
        <div className="blog_container1">
            
            <div className="blog1"><img className="olympic_game" src="images/track.jpg"/></div>
            <h2 className="blog_game">  Track</h2>
            <p className="blog_disc">Track and field events at any Olympics are perfect in their simplicity. One man or woman runs faster than all opponents. Somebody throws an object further than his competitors. Sprint races are over in literally seconds. Viewers likely take this for granted.</p>
            
            <div className="blog_learnMore">
                <p className="name1"> By Barsat KC / 7 March 2023</p>
                <a href="#">Learn More-</a>
            </div>
        </div>
        
        
        </div>
        <Footer/>
    
    </>
  )
}

export default Blog