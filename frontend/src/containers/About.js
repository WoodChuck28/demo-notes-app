import React from 'react'
import styles from './mystyles.module.css'
import image1 from './img/Carlisle.jpg'
import image2 from './img/Davis.jpg'
import image3 from './img/Daab.jpg'
import image4 from './img/Lin2.jpg'
import image5 from './img/Massey2.jpg'
import image6 from './img/Johnston2.jpg'
import image7 from './img/OIP2.jpg'
import image8 from './img/Gresham2.jpg'
import image9 from './img/Chalk2.jpg'




export default function AboutPage() {
   
    return (
        <div className={styles.mainBody}>
          <div className={styles.mainCard}>
            <h2 className={styles.mainHeader}>Here is a little about US</h2>
            <div className={styles.mainDescription}>
              At CHARGEnorth we try to let children take charge of their own learning.
              We challenge students to think for themselves, and we teach them that 
              having a unique opinion or thought is always welcome. Our hope is to help
              students master their content while learning how it will mold them into a 
              better professional in the outside world.
            </div>
            <div className={styles.gridContainer}>
              <div className={styles.gridItem}>
                <div className={styles.imageContainer}>
                <h3 className={styles.personHeader}>Ms. Carlisle</h3>
                <div className={styles.picture} style={{ backgroundImage:`url(${image1})`}}></div>
                <div className={styles.personDescription}>
                <div className={styles.descriptionContainer}>
                  <h4>Subject: AP World History</h4>
                  <p>Ms. Carlisle is perhaps the COOLEST person you could ever meet. Her energy and 
                    passion are infectious and she teaches students to learn in a various of fun
                    and entertaining ways. If you listen carefully, you may even be able to hear one of 
                    her songs about History from there.
                  </p>
                  </div>
                </div>
                </div> 
              </div>
              <div className={styles.gridItem}>
              <h3 className={styles.personHeader}>Ms. Davis</h3>
              <div className={styles.picture} style={{ backgroundImage:`url(${image2})`}}></div>
              <div className={styles.personDescription}>
              <div className={styles.descriptionContainer}>
              <h4>Subject: AP Seminar and Internship</h4>
              <p>Ms. Davis is an extremely knowledgeable teacher with experience in various different
                areas. Her specialty is in writing, research, and she is an absolute logistics dynamo.
                Ms. Davis is a core pillar of our charge program as she not only teaches a plethora of 
                subjects, but she is a foundational component when it comes to planning, organizing,
                and executing one of our numerous awesome events.
              </p>
              </div>
              </div>
              </div>
              <div className={styles.gridItem}>
              <h3 className={styles.personHeader}>Mr. Daab</h3>
              <div className={styles.picture} style={{ backgroundImage:`url(${image3})`}}></div>
              <div className={styles.personDescription}>
                <div className={styles.descriptionContainer}>
              <h4>Subject: AP Physics and Engineering</h4>
              <p>
                Mr. Daab is one of the biggest nerds you will meet. He is reasonably proficient in
                computer programming. He taught AP Physics for 3 years at North but is now one of our
                engineering teachers. He enjoys preparing students for life outside of highschool.  
              </p>
              </div>
              </div>
              </div>
              <div className={styles.gridItem}>
              <h3 className={styles.personHeader}>Mr. Lin</h3>
              <div className={styles.picture} style={{ backgroundImage:`url(${image4})`}}></div>
              <div className={styles.personDescription}>
                <div className={styles.descriptionContainer}>
              <h4>Subject: AP Physics and Chemistry</h4>
              <p>
                Mr. Lin is cool as a cucumber. He goes the extra mile to ensure his students grasp a concept,
                and I have never met someone so level headed. He is a science guru who loves to challenge students
                and hold them accountable for their learning. His command over a classroom is second to none and 
                the respect he garnishes from his students is truly commendable.
              </p>
              </div>
              </div>
              </div>
              <div className={styles.gridItem}>
              <h3 className={styles.personHeader}>Ms. Massey</h3>
              <div className={styles.picture} style={{ backgroundImage:`url(${image5})`}}></div>
              <div className={styles.personDescription}>
                <div className={styles.descriptionContainer}>
              <h4>Subject: AP Human and US History</h4>
              <p>
                Ms. Massey is a true history buff. She delivers the full story to her students
                and doesn't pull any punches. Her ability to make the most mundane parts of
                history and geography exciting is truly inspiring. Whenever I have the time, I 
                stand outside her doorway to hear her awesome lessons that include everything from
                pop culture references to connecting music and literature to certain historical periods.
              </p>
              </div>
              </div>
              </div>
              <div className={styles.gridItem}>
              <h3 className={styles.personHeader}>Ms. Johnston</h3>
              <div className={styles.picture} style={{ backgroundImage:`url(${image6})`}}></div>
              <div className={styles.personDescription}>
                <div className={styles.descriptionContainer}>
              <h4>Subject: AP Lit and AP Lang</h4>
              <p>
                Ms. Johnston creates some of the most awesome lessons to help teach the classics. She 
                also has the amazing ability of connecting her content to Ms. Massey's history lessons to
                help reinforce both the content of Ms. Massey's class as well as her own. She is always coming
                up with cool lessons that help students take ownership in their own learning as well as 
                getting excited about the learning in the process.
              </p>
              </div>
              </div>
              </div>
              <div className={styles.gridItem}>
              <h3 className={styles.personHeader}>Ms. Stanfield</h3>
              <div className={styles.picture} style={{ backgroundImage:`url(${image7})`}}></div>
              <div className={styles.personDescription}>
                <div className={styles.descriptionContainer}>
              <h4>Subject: AP Environmental</h4>
              <p>
                What do you get when you combine the intelligence of a scientist, the endurance
                of a runner, and the passion of a cheerleader? That would be Ms. Stanfield! She 
                inspires and encourages her students to dig deep and extend their learning past 
                the requirements of her course. She also works closely with the engineering teacher,
                Mr Bradley to create awesome lessons that combine environmental science with real 
                world applications.
              </p>
              </div>
              </div>
              </div>
              <div className={styles.gridItem}>
              <h3 className={styles.personHeader}>Mr. Bradley</h3>
              <div className={styles.picture} style={{ backgroundImage:`url(${image7})`}}></div>
              <div className={styles.personDescription}>
                <div className={styles.descriptionContainer}>
              <h4>Subject: Engineering</h4>
              <p>
                Kevin is an experienced engineering teacher who combines the requirements of highschool
                engineering with real world application. He is a true believer in making the students do
                the work, so he shows them how and he sets them free to do things for themselves. His support
                has been key in getting our CHARGEnorth store off the ground and helping students to learn how
                to pursue passion projects in the world of engineering.
              </p>
              </div>
              </div>
              </div>
              <div className={styles.gridItem}>
              <h3 className={styles.personHeader}>Ms. Gresham</h3>
              <div className={styles.picture} style={{ backgroundImage:`url(${image8})`}}></div>
              <div className={styles.personDescription}>
                <div className={styles.descriptionContainer}>
              <h4>Subject: Counselor/Mother of CHARGE</h4>
              <p>
                Ms. Gresham is the glue that keeps CHARGEnorth together. She is a pillar of support
                for every single student and she truly cares about them all individually. The title of 
                counselor doesn't really do her justice as she does so much more for our program from logistics
                to planning events and onboarding new students. It is safe to say, without her, there would be 
                no CHARGEnorth. Just make sure you schedule an appointment because she is a busy woman!
              </p>
              </div>
              </div>
              </div>
              <div className={styles.gridItem}>
              <h3 className={styles.personHeader}>Dr. Chalk</h3>
              <div className={styles.picture} style={{ backgroundImage:`url(${image9})`}}></div>
              <div className={styles.personDescription}>
                <div className={styles.descriptionContainer}>
              <h4>Subject: CHARGE Administrator</h4>
              <p>
                Dr. Chalk is the champion of CHARGEnorth. Don't quote me on this, but I believe
                this program was her vision originally (I am sure Ms Gresham was involved!). Dr. Chalk
                is an extremely intelligent individual with a kindness that makes it hard to remember
                that she is an administrator. She is truly a champion for all of our students and she 
                is continuously working with the school to ensure that we are all given the flexibility 
                to do what is best for our program. There is not a single amazing thing that happens in CHARGEnorth
                without Dr. Chalk's involvement.
              </p>
              </div>
              </div>
              </div>

            </div>
          </div>
        </div>
    );
}