import React from 'react';
import "./madeltable.css"
import Footer from '../services/footerCom/Footer';
import Navbar2 from '../services/navbarCom/Navbar2';
const Madeltable = () => {
  return (
    <>
    <Navbar2/>
      <div className="rank-container">
        <div className="content">
          <h1 className="madel-table">Pyaris FunOlympic 2024 Medal Table</h1>
        </div>
      </div>
      <table className="styled-table">
        <thead>
          <tr>
            <th className='sn'>S.N</th>
            <th className='sn'>TEAM</th>
            <th className='sn'>NAME</th>
            <th className='sn'>Gold</th>
            <th className='sn'>Silver</th>
            <th className='sn'>Bronze</th>
            <th className='sn'>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="active-row">
            <td>1</td>
            <td><img src="images/gb.svg" height="60" width="90"/></td>
            <td>British</td>
            <td>5</td>
            <td>10</td>
            <td>5</td>
            <td><span className="s">20</span></td>
          </tr>
          <tr >
            <td>2</td>
            <td><img src="images/in.svg" height="60" width="90"/></td>
            <td>India</td>
            <td>7</td>
            <td>7</td>
            <td>4</td>
            <td><span className="s">18</span></td>
          </tr>
          
          <tr >

<td>3</td>  
<td> <img src=" images/np.svg " height="60" width="90"/></td> 

<td>Nepal</td> 
<td>-</td> 
<td>2</td> 
<td>-</td> 
<td ><span class="s">2</span></td>  
</tr>
<tr >

<td>4</td> 
<td> <img src=" images/us.svg " height="60" width="90"/></td>  

<td>America</td> 
<td>1</td> 
<td>-</td> 
<td>1</td> 
<td ><span class="s">2</span></td> 

</tr>
<tr >

<td>5</td> 
<td> <img src=" images/au.svg " height="60" width="90"/></td>  

<td>Australia</td> 
<td>4</td> 
<td>8</td> 
<td>14</td>
<td ><span class="s">26</span></td>  

</tr>
<tr >

<td>6</td>  
<td> <img src=" images/br.svg " height="60" width="90"/></td> 

<td>Brazil</td> 
<td>9</td> 
<td>4</td> 
<td>2</td> 
<td ><span class="s">15</span></td> 

</tr>
<tr >

<td>7</td>  
<td> <img src=" images/fr.svg " height="60" width="90"/></td> 

<td>France</td> 
<td>1</td> 
<td>-</td> 
<td>1</td> 
<td ><span class="s">2</span></td>  

</tr>
<tr >

<td>8</td>  
<td> <img src=" images/de.svg " height="60" width="90"/></td> 

<td>Germany</td> 
<td>-</td> 
<td>1</td> 
<td>-</td> 
<td ><span class="s">1</span></td> 
</tr>
<tr >

<td>9</td>  
<td> <img src=" images/it.svg " height="60" width="90"/></td> 

<td>Italy</td> 
<td>-</td> 
<td>-</td> 
<td>1</td> 
<td ><span class="s">1</span></td> 
</tr>
<tr >

<td>10</td>  
<td> <img src=" images/fi.svg " height="60" width="90"/></td> 

<td>Finland</td> 
<td>2</td> 
<td>2</td> 
<td>4</td> 
<td ><span class="s">8</span></td> 

</tr>
<tr >

<td>11</td>  
<td> <img src=" images/hu.svg " height="60" width="90"/></td> 

<td>Hungry</td> 
<td>5</td> 
<td>7</td> 
<td>2</td>
<td ><span class="s">14</span></td>  

</tr>
<tr >

                <td>12</td>  
                <td> <img src=" images/jp.svg " height="60" width="90"/></td> 
                
                <td>Japan</td> 
                <td>1</td> 
                <td>1</td> 
                <td>-</td> 
                <td ><span class="s">2</span></td> 
                
              </tr>
              <tr >

                <td>13</td>  
                <td> <img src=" images/nl.svg " height="60" width="90"/></td> 
                
                <td>Netherland</td> 
                <td>1</td> 
                <td>1</td> 
                <td>-</td> 
                <td ><span class="s">2</span></td> 
              </tr>
              <tr >

                <td>14</td>  
                <td> <img src=" images/be.svg " height="60" width="90"/></td> 
                
                <td>Belgium</td> 
                <td>12</td> 
                <td>10</td> 
                <td>5</td> 
                <td ><span class="s">27</span></td>  
                
              </tr>
              <tr >

                <td>15</td>  
                <td> <img src=" images/pl.svg " height="60" width="90"/></td> 
                
                <td>Poland</td> 
                <td>1</td> 
                <td>-</td> 
                <td>2</td> 
                <td ><span class="s">3</span></td>  
                
              </tr>
              <tr >

                <td>16</td>  
                <td> <img src=" images/es.svg " height="60" width="90"/></td> 
                
                <td>Spain</td> 
                <td>2</td> 
                <td>7</td> 
                <td>8</td> 
                <td ><span class="s">17</span></td>  
                
              </tr>
              <tr >

                <td>17</td>  
                <td> <img src=" images/nz.svg " height="60" width="90"/></td> 
                
                <td>New Zeland</td> 
                <td>3</td> 
                <td>7</td> 
                <td>8</td> 
                <td ><span class="s">18</span></td>  
              </tr>
              <tr >

                <td>18</td>  
                <td> <img src=" images/no.svg " height="60" width="90"/></td> 
                
                <td>Norway</td> 
                <td>2</td> 
                <td>5</td> 
                <td>2</td> 
                <td ><span class="s">9</span></td> 
                
              </tr>
              <tr >

                <td>19</td>  
                <td> <img src=" images/dk.svg " height="60" width="90"/></td> 
                
                <td>Denmark</td> 
                <td>-</td> 
                <td>-</td> 
                <td>1</td> 
                <td ><span class="s">1</span></td> 
              </tr>
              <tr >

                <td>20</td>  
                <td> <img src=" images/nl.svg " height="60" width="90"/></td> 
                
                <td>Netherland</td> 
                <td>2</td> 
                <td>2</td> 
                <td>4</td> 
                <td ><span class="s">8</span></td> 
              </tr>
        </tbody>
      </table>
      <Footer/>
    </>
  );
}

export default Madeltable;
