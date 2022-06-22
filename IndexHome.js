//STEP 1 -- IMPORT REACT
import React from 'react'
import { Link } from 'react-router-dom';
import '../css/Home.css';
import Logo2 from'../images/1.jpg';
//import Logo3 from'../images/2.jpg';
import Logo4 from'../images/8.jpg';
import Logo5 from'../images/10.jpg';
import Logo6 from'../images/12.jpg';
import Logo7 from'../images/13.jpg';
import Logo9 from'../images/14.jpg';
import Logo8 from'../images/15.jpg';
import Logo10 from'../images/16.jpg';

//STEP 2 -- CREATE FUNCTIONAL COMPONENT
function IndexHome() {
    return (
        <div id="App21">  
           <h1 id="App15">Medicare</h1>
            <div>
        <nav className="App2">
                <input  type="search" placeholder="Search" aria-label="Search" id="App13"/>
                <button className="btn btn-outline-success" type="submit" id="App14">Search</button>
                <Link to="/aboutus" className="App1">ABOUT US </Link> 
                <Link to="/contactus" className="App1">CONTACT US </Link> 
                <Link to="/adminlogin" className="App1">ADMIN </Link>
                <Link to="/registration" className="App10">REG</Link>
                <Link to="/login" className="App11">LOGIN </Link> 
            </nav>
         </div>
       
         <div>
          <img src={Logo6} alt="Nothing" id="App25"></img>
         </div>
         <br/>
         <h3>Some of the doctor's avaliable in Medicare</h3>
         <br/>
         <div className="row" id="App22">
         <div className="col-lg-3">
<div className="card" id="App16">
  
  <img className="card-img-top" src={Logo2} alt="Card image"/>
  <div className="card-body">
    <h4 className="card-title">Pardhu Mahidhar</h4>
    <p className="card-text">Some example text some example text. He is an architect and engineer</p>
    <a href="#" className="btn btn-primary">See Profile</a>
  </div>
  </div>
</div>
<div className="col-lg-3">

 <div className="card" id="App16">
  <img className="card-img-top" src= {Logo2} alt="Card image"/>
  <div className="card-body">
    <h4 className="card-title">Nandan</h4>
    <p className="card-text">Some example text some example text. He is an architect and engineer</p>
    <a href="#" className="btn btn-primary">See Profile</a>
  </div>
  </div>
 </div>
 <div className="col-lg-3">

 <div className="card" id="App16">
  <img className="card-img-top" src={Logo2} alt="Card image"/>
  <div className="card-body">
    <h4 className="card-title">Harsha Vardhan</h4>
    <p className="card-text">Some example text some example text. He is an architect and engineer</p>
    <a href="#" className="btn btn-primary">See Profile</a>
  </div>
  </div>
 </div>
 <div className="col-lg-3">

 <div className="card" id="App16">
  <img className="card-img-top" src={Logo2} alt="Card image"/>
  <div className="card-body">
    <h4 className="card-title">Nakhul</h4>
    <p className="card-text">Some example text some example text. He is an architect and engineer</p>
    <a href="#" className="btn btn-primary">See Profile</a>
  </div>
  
  </div>
   </div>
</div>
<br/>
<br>
</br>
<h3>Patient and Doctor Login</h3>
<br/>

<div className="row">
  
         <div className="col-lg-3" id="App20">

<div className="card" id="App16">
  
  <img className="card-img-top" src={Logo4} alt="Card image"/>
  <div className="card-body">
    <h4 className="card-title">Pardhu Mahidhar</h4>
    <p className="card-text">Some example text some example text. He is an architect and engineer</p>
    <a href="#" className="btn btn-primary">Doctor Login</a>
  </div>
  </div>
</div>
<div className="col-lg-3" id="App20">

 <div className="card" id="App16">
  <img className="card-img-top" src= {Logo5} alt="Card image"/>
  <div className="card-body">
    <h4 className="card-title">Nandan</h4>
    <p className="card-text">Some example text some example text. He is an architect and engineer</p>
    <a href="#" className="btn btn-primary">Patient Login</a>
  </div>
  </div>
  
 </div>
 
    </div>
    <p id="App24">Medicare is for those people who don't want to wait in long queues to book an appointment with one of the the best doctor neardy and also for those doctors to wish to consult their patients at their own convenience</p>
   
    <div>
      <img src={Logo7}></img>
    </div>
    <br/>
    <h3>Reviews</h3>
    <br/>
    <div className="row" id="App26">
         <div className="col-lg-3">
<div className="card" id="App16">
  
  <img className="card-img-top" src={Logo9} alt="Card image"/>
  <div className="card-body">
    <h4 className="card-title">Ramesh</h4>
    <p className="card-text"><b>I would like to let you know</b> how much we appreciate the special care our daughter was given by the doctors and staff.                                                                                                                             </p>
   
  </div>
  </div>
</div>
<div className="col-lg-3">

 <div className="card" id="App16">
  <img className="card-img-top" src= {Logo8} alt="Card image"/>
  <div className="card-body">
    <h4 className="card-title">Shivani</h4>
    <p className="card-text"><b>The waiting time for </b>getting an appointment approved is too less and that's why <b>"I like medicine"</b></p>
    
    
  </div>
  </div>
 </div>
 <div className="col-lg-3">

 <div className="card" id="App16">
  <img className="card-img-top" src={Logo10} alt="Card image"/>
  <div className="card-body">
    <h4 className="card-title">Giri</h4>
    <p className="card-text"><b>"I recommend it all working "</b>professional who doesn't have much time to wait at hosiptal or visit the doctor</p>
    
    
  </div>
  </div>
 </div>
 </div>
 <br/>
 <br/>


    </div>
       )

}

//STEP 3 -- EXPORT IT TO USE IT
export default IndexHome