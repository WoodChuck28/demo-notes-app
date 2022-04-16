import React from 'react'
import image from "./img/OIP.jpg"; 
import "./LandingPage.css";
import styles from "./mystyles.module.css";



export default function LandingPage() {
    
    return (
        <div className="LandingPage" >
          <div style={{fontSize: 24, textAlign: 'center'}} id="welcome">
            Welcome to CHARGEnorth!
          </div>
          
             
          
          <div classname = "center" id="center">
            <div classname="image" id="image" style={{ backgroundImage:`url(${image})`}}></div>
          </div>
          <div className={styles.cardmain}> 
            
              <h4>What is CHARGEnorth?</h4>
              <p>CHARGEnorth is a STEM based program operating out of North Gwinnett Highschool.
                We tackle  learning rigorous course material through project based research and investigation.
                Students are continuously challenged to learn required course material with a focus on 
                humanities and engineering.
              </p>
            
          </div>
        </div>
      );
}