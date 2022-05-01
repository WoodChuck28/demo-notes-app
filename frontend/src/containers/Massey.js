import React from 'react'
import masseyImg from './img/Massey2.jpg'

export default function Massey() {
    
    return (
    <body class="w3-light-grey">


<div class="w3-content w3-margin-top" style={{maxwidth: "1400px"}}>

  
  <div class="w3-row-padding">
    <div class="w3-third">
      <div class="w3-white w3-text-grey w3-card-4">
        <div class="w3-display-container">
          <img src={masseyImg} style={{width:"100%"}} alt="Avatar"></img>
          <div class="w3-display-bottomleft w3-container w3-text-black">
            <h2>Ms. Massey</h2>
          </div>
        </div>
        <div class="w3-container">
          <p><i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-red"></i>Educator</p>
          <p><i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-red"></i>Atlanta, GA</p>
          <p><i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-red"></i>katie.massey@gcpsk12.org</p>
          <hr></hr>

          <p class="w3-large"><b><i class="fa fa-asterisk fa-fw w3-margin-right w3-text-red"></i>Skills</b></p>
          <p>US History</p>
          <div class="w3-light-grey w3-round-xlarge w3-small">
            <div class="w3-container w3-center w3-round-xlarge w3-red" style={{width:"90%"}}>100%</div>
          </div>
          <p>Human Geography</p>
          <div class="w3-light-grey w3-round-xlarge w3-small">
            <div class="w3-container w3-center w3-round-xlarge w3-red" style={{width:"90%"}}>
              <div class="w3-center w3-text-white">90%</div>
            </div>
          </div>
          <p>Writing</p>
          <div class="w3-light-grey w3-round-xlarge w3-small">
            <div class="w3-container w3-center w3-round-xlarge w3-red" style={{width:"85%"}}>85%</div>
          </div>
          <br></br>

          <p class="w3-large w3-text-theme"><b><i class="fa fa-globe fa-fw w3-margin-right w3-text-red"></i>Languages</b></p>
          <p>English</p>
          <div class="w3-light-grey w3-round-xlarge">
            <div class="w3-round-xlarge w3-red" style={{height:"24px", width:"100%"}}></div>
          </div>
          
          <br></br>
        </div>
      </div><br></br>

    
    </div>

    
    <div class="w3-twothird">
    
      <div class="w3-container w3-card w3-white w3-margin-bottom">
        <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-red"></i>Work Experience</h2>
        <div class="w3-container">
          <h5 class="w3-opacity"><b>AP US History / GCPS</b></h5>
          <h6 class="w3-text-red"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Aug 2000 - <span class="w3-tag w3-red w3-round">Current</span></h6>
          <p>An amazing description of all of Ms. Massey`s roles and responsibilities will go here</p>
          <hr></hr>
        </div>
        
      </div>

      <div class="w3-container w3-card w3-white">
        <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-red"></i>Education</h2>
        <div class="w3-container">
          <h5 class="w3-opacity"><b>University of Tennessee</b></h5>
          <h6 class="w3-text-red"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Forever</h6>
          <p>Masters: History</p>
          <hr></hr>
        </div>
        <div class="w3-container">
          <h5 class="w3-opacity"><b>University of Tennessee</b></h5>
          <h6 class="w3-text-red"><i class="fa fa-calendar fa-fw w3-margin-right"></i>2013 - 2015</h6>
          <p>Undergraduate Degree: History</p>
          <hr></hr>
        </div>
        
      </div>

    
    </div>
    
  
  </div>
  
  
</div>
</body>
    );
}
