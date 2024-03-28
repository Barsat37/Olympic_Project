import React from 'react'
import Navbar2 from '../services/navbarCom/Navbar2'
import "./Football.css"

const Football = () => {
  return (
  <>
  <Navbar2/>
  <div className="football">
<div className="football-in">
    <p className='pp'>Football</p>
</div>
</div>
<div className="container">
    <div className="container1">
      <div className="video"></div>
        
    </div>
    <div className="container2">
        <div className="schedule">

        </div>
    </div>
</div>




<div className="suggection">
<h1 className="p1">Related Suggestion</h1>
</div>


<div className="related_videos">
  <div className="video1"></div>
  <div className="video2"></div>
  <div className="video3"></div>
</div>
  
  
  </>
  )
}

export default Football