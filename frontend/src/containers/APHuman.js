import React from 'react'
import styles from './coursepage.module.css'




export default function APHuman() {
    return(
            <div className={styles.mainBody}>
                
                <div className={styles.headerCard}>
                    <div className={styles.headerMain}>
                        <h3>AP Human Geography Course Description</h3>
                        <p>Below is a general description of AP Human Geography. In CHARGEnorth
                            we tackle the learning a little differently, but since it is an AP 
                            course, we are bound to a very specific core content.
                        </p>
                    </div>
                </div>
                
                <section className={styles.coreContent}>
                    <p>
                    <strong>Course Description:</strong> AP Human Geography is a college level course that travels well beyond the simple
                    memorization of geographic facts and figures. It teaches you why and how things happen in and around
                    the world, and how they are connected. To put it simply, Human Geography deals with the why of
                    where. We deal with demographics, migration, linguistics, religion, political geography, urbanization,
                    and industrialization. It`s the perfect course for students interested in what`s happening in the world
                    now! 
                    </p>
                </section>
                <section className={styles.coreContent}>
                    <p>
                    <strong>Specific Skills for Success:</strong> The requirements to succeed are desire and determination. If the student is
                    willing to work hard and never give up, we would recommend them to take AP Human Geography.
                    Other skills that are important to have would be above average reading abilities and above average
                    writing skills.
                    </p>
                </section>
                <section className={styles.coreContent}>
                    <p>
                    <strong>Out of Class Commitments:</strong> Students are required to read most nights in a textbook and take reading
                    notes.
                    </p>
                </section>
                <section className={styles.coreContent}>
                    <p>
                    <strong>Past Student Comments:</strong>
                    <ul>
                        <li style={{paddingTop: "5px"}}>“AP Human Geography is an interesting course to take. It gives you an overview of the whole AP
                            program. Human Geography helps strengthen your vocabulary and learn about the world around you.”</li>
                        <li style={{paddingTop: "5px"}}>“If you want a new kind of challenge for yourself take this class!”</li>
                        <li style={{paddingTop: "5px"}}>“Take AP Human Geography! The teachers are great!”</li>
                    </ul>
                    </p>
                </section>
                <section className={styles.coreContent}>
                    <p>
                    <strong>School-Issued Texts and Resources:</strong>
                    <br></br>An Introduction to Human Geography: The Cultural Landscape by James M. Rubenstein 11th Edition
                    <ul>
                        <li style={{paddingTop: "5px"}}>ISBN: 0-13-192019-7</li>
                        <li style={{paddingTop: "5px"}}>Amsco: Human Geography</li>
                    </ul>
                    </p>
                </section>
                

            </div>

        

    );
}