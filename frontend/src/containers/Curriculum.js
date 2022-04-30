import React from 'react'
import styles from "./tableStyles.module.css"; 

export default function Curriculum()  { 
    return(
        <div className={styles.mainBody} style={{textAlign: 'center'}}>
          <div className={styles.mainCard}>
            <div className={styles.headerMain}>
              <h1>CHARGEnorth Courseload</h1>
              <section>Below you will find the CHARGEnorth curriculum for each year. Seniors
                have a variety of options and their schedules differ wildly so for now, those are
                not listed. You will notice that math classes are not part of the program. This is 
                due to the wide range of student math abilities which range from Algebra II all the 
                way up to Ga Tech Math II.
              </section>
            </div>
            <section className={styles.bigBody}>
              <section className={styles.cardHouse}>
                <section className={styles.contentCard}>
                  <h2>Freshman CHARGE Courseload</h2>
            <table class="table align-middle" >
              <thead>
                <tr >
                  
                  <th className={styles.colHeader} scope="col">Class</th>
                  <th className={styles.colHeader} scope="col">Teacher</th>
                  <th className={styles.colHeader} scope="col">About</th>
                </tr>
              </thead>
              <tbody>
                <tr  className={styles.colHeader}>
                  
                  <td className={styles.tableContent}>AP Human Geography</td>
                  <td className={styles.tableContent}>Ms. Massey</td>
                  <td className={styles.tableContent}>
                     <a href='/APHuman'><button type="button" class="btn btn-link btn-sm px-3" data-ripple-color="dark">
                      <i class="fas fa-lightbulb"></i>
                    </button></a>

                    
                  </td>
                </tr>
                <tr  className={styles.colHeader}>
                  
                  <td className={styles.tableContent}>9th Grade Language Arts</td>
                  <td className={styles.tableContent}>Ms. Johnston</td>
                  <td className={styles.tableContent}>
                    <button type="button" class="btn btn-link btn-sm px-3" data-ripple-color="dark">
                      <i class="fas fa-lightbulb"></i>
                    </button>
                  </td>
                </tr>
                <tr  className={styles.colHeader}>
                  
                  <td className={styles.tableContent}>Foundations of Engineering</td>
                  <td className={styles.tableContent}>Mr Daab</td>
                  <td className={styles.tableContent}>
                    <button type="button" class="btn btn-link btn-sm px-3" data-ripple-color="dark">
                      <i class="fas fa-lightbulb"></i>
                    </button>
                  </td>
                </tr>
                <tr  className={styles.colHeader}>
                  
                  <td className={styles.tableContent}>Chemistry</td>
                  <td className={styles.tableContent}>Mr Lin</td>
                  <td className={styles.tableContent}>
                    <button type="button" class="btn btn-link btn-sm px-3" data-ripple-color="dark">
                      <i class="fas fa-lightbulb"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            </section>
            </section>
            <section className={styles.cardHouse}>
                <section className={styles.contentCard}>
            <h2>Sophomore CHARGE Courseload</h2>
            <table class="table align-middle">
              <thead>
                <tr >
                  
                  <th className={styles.colHeader} scope="col">Class</th>
                  <th className={styles.colHeader} scope="col">Teacher</th>
                  <th className={styles.colHeader} scope="col">About</th>
                </tr>
              </thead>
              <tbody>
                <tr  className={styles.colHeader}>
                  
                  <td className={styles.tableContent}>AP World History</td>
                  <td className={styles.tableContent}>Ms. Carlisle</td>
                  <td className={styles.tableContent}>
                    <button type="button" class="btn btn-link btn-sm px-3" data-ripple-color="dark">
                      <i class="fas fa-lightbulb"></i>
                    </button>
                  </td>
                </tr>
                
                <tr  className={styles.colHeader}>
                  
                  <td className={styles.tableContent}>Concepts of Engineering</td>
                  <td className={styles.tableContent}>Mr Bradley</td>
                  <td className={styles.tableContent}>
                    <button type="button" class="btn btn-link btn-sm px-3" data-ripple-color="dark">
                      <i class="fas fa-lightbulb"></i>
                    </button>
                  </td>
                </tr>
                <tr  className={styles.colHeader}>
                  
                  <td className={styles.tableContent}>AP Environmental Science</td>
                  <td className={styles.tableContent}>Ms Stanfield</td>
                  <td className={styles.tableContent}>
                    <button type="button" class="btn btn-link btn-sm px-3" data-ripple-color="dark">
                      <i class="fas fa-lightbulb"></i>
                    </button>
                  </td>
                </tr>
                <tr  className={styles.colHeader}>
                  
                  <td className={styles.tableContent}>AP Research</td>
                  <td className={styles.tableContent}>Ms Davis</td>
                  <td className={styles.tableContent}>
                    <button type="button" class="btn btn-link btn-sm px-3" data-ripple-color="dark">
                      <i class="fas fa-lightbulb"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            </section>
            </section>
            <section className={styles.cardHouse}>
                <section className={styles.contentCard}>
            <h3>Junior CHARGE Courseload</h3>
            <table class="table align-middle">
              <thead>
                <tr >
                  
                  <th className={styles.colHeader} scope="col">Class</th>
                  <th className={styles.colHeader} scope="col">Teacher</th>
                  <th className={styles.colHeader} scope="col">About</th>
                </tr>
              </thead>
              <tbody>
                <tr  className={styles.colHeader}>
                  
                  <td className={styles.tableContent}>AP US History</td>
                  <td className={styles.tableContent}>Ms. Massey</td>
                  <td className={styles.tableContent}>
                    <button type="button" class="btn btn-link btn-sm px-3" data-ripple-color="dark">
                      <i class="fas fa-lightbulb"></i>
                    </button>
                  </td>
                </tr>
                <tr  className={styles.colHeader}>
                  
                  <td className={styles.tableContent}>AP Lang</td>
                  <td className={styles.tableContent}>Ms Johnston</td>
                  <td className={styles.tableContent}>
                    <button type="button" class="btn btn-link btn-sm px-3" data-ripple-color="dark">
                      <i class="fas fa-lightbulb"></i>
                    </button>
                  </td>
                </tr>
                <tr  className={styles.colHeader}>
                  
                  <td className={styles.tableContent}>Applications of Engineering</td>
                  <td className={styles.tableContent}>Mr Daab</td>
                  <td className={styles.tableContent}>
                    <button type="button" class="btn btn-link btn-sm px-3" data-ripple-color="dark">
                      <i class="fas fa-lightbulb"></i>
                    </button>
                  </td>
                </tr>
                <tr  className={styles.colHeader}>
                  
                  <td className={styles.tableContent}>AP Physics 1</td>
                  <td className={styles.tableContent}>Mr Lin</td>
                  <td className={styles.tableContent}>
                    <button type="button" class="btn btn-link btn-sm px-3" data-ripple-color="dark">
                      <i class="fas fa-lightbulb"></i>
                    </button>
                  </td>
                </tr>
                <tr  className={styles.colHeader}>
                  
                  <td className={styles.tableContent}>Science Fair</td>
                  <td className={styles.tableContent}>Mr Daab</td>
                  <td className={styles.tableContent}>
                    <button type="button" class="btn btn-link btn-sm px-3" data-ripple-color="dark">
                      <i class="fas fa-lightbulb"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            </section>
            </section>
            </section>
            </div>
          </div>
    );
}