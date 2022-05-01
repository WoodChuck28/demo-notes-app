import React from 'react'
import styles from './coursepage.module.css'

export default function NinthLA(){
    return(
        <div className={styles.mainBody}>
                
                <div className={styles.headerCard}>
                    <div className={styles.headerMain}>
                        <h3>Ninth Grade Language Arts</h3>
                        <p>Below is a general description of 9th grade Language Arts. In CHARGEnorth
                            we tackle the learning a little differently, so there will be deviation from 
                            other LA classes at NGHS.
                        </p>
                    </div>
                </div>
                
                <section className={styles.coreContent}>
                    <p>
                    <strong>Course Description:</strong> LA—This course includes a balance of composition, 
                    applied grammar, and both literary and informational texts, with a focus on 
                    world literature and documents from American history. Students will analyze and respond 
                    to complex texts appropriate for 9th graders.Developing vocabulary, speaking, listening, 
                    researching, and test-taking skills are integral parts of the course curriculum.
                    </p>
                </section>
                </div>
    );
}