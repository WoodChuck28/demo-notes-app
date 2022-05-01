import React from 'react'
import styles from './coursepage.module.css'


export default function Chemistry(){
    return(
        <div className={styles.mainBody}>
                
                <div className={styles.headerCard}>
                    <div className={styles.headerMain}>
                        <h3>Chemistry</h3>
                        <p>Below is a general description of CHARGE Chemistry. In CHARGEnorth
                            we tackle the learning a little differently, so there will be deviation from 
                            other chemistry classes at NGHS. 
                        </p>
                    </div>
                </div>
                
                <section className={styles.coreContent}>
                    <p>
                    <strong>Course Description:</strong>This accelerated course is designed for 
                    gifted students who excel in science and math to help them learn the major theories and principles 
                    of the living world while preparing them for the opportunity to take Advanced Placement science classes 
                    in the following years. Laboratory experience to develop problem solving abilities is 
                    emphasized. This class requires students to study daily in order to achieve the academic success they desire.
                    </p>
                </section>
                </div>
    );
}