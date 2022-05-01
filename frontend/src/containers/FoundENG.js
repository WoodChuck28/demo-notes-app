import React from 'react'
import styles from './coursepage.module.css'

export default function FoundENG(){
    return(
        <div className={styles.mainBody}>
                
                <div className={styles.headerCard}>
                    <div className={styles.headerMain}>
                        <h3>Foundations of Engineering</h3>
                        <p>Below is a general description of Foundations of Engineering. In CHARGEnorth
                            we tackle the learning a little differently, so there will be deviation from 
                            other engineering classes at NGHS. We focus on learning engineering through 
                            integrating it with the other components of the students academia.
                        </p>
                    </div>
                </div>
                
                <section className={styles.coreContent}>
                    <p>
                    <strong>Course Description:</strong>Foundations of Engineering and Technology is the 
                    introductory course for all Georgia Engineering and Technology Education pathways. 
                    This course provides students with opportunities to develop fundamental technological 
                    literacy as they learn about the history, systems, and processes of invention and innovation.
                    </p>
                </section>
                </div>
    );
}