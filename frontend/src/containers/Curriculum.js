import React from 'react'
import styles from "./tableStyles.module.css"; 

export default function Curriculum()  { 
    return(
        <div style={{textAlign: 'center'}}>
          <h2>Freshman CHARGE Courseload</h2>
            <table class="table align-middle">
              <thead>
                <tr >
                  <th className={styles.colHeader} scope="col">Grade</th>
                  <th className={styles.colHeader} scope="col">Class</th>
                  <th className={styles.colHeader} scope="col">Teacher</th>
                  <th className={styles.colHeader} scope="col">About</th>
                </tr>
              </thead>
              <tbody>
                <tr  className={styles.colHeader}>
                  <th scope="row">9</th>
                  <td>AP Human Geography</td>
                  <td>Ms. Massey</td>
                  <td>
                     <a href='/APHuman'><button type="button" class="btn btn-link btn-sm px-3" data-ripple-color="dark">
                      <i class="fas fa-lightbulb"></i>
                    </button></a>

                    
                  </td>
                </tr>
                <tr  className={styles.colHeader}>
                  <th scope="row">9</th>
                  <td>British Literature</td>
                  <td>Ms. Johnston</td>
                  <td>
                    <button type="button" class="btn btn-link btn-sm px-3" data-ripple-color="dark">
                      <i class="fas fa-lightbulb"></i>
                    </button>
                  </td>
                </tr>
                <tr  className={styles.colHeader}>
                  <th scope="row">9</th>
                  <td>Foundations of Engineering</td>
                  <td>Mr Daab</td>
                  <td>
                    <button type="button" class="btn btn-link btn-sm px-3" data-ripple-color="dark">
                      <i class="fas fa-lightbulb"></i>
                    </button>
                  </td>
                </tr>
                <tr  className={styles.colHeader}>
                  <th scope="row">9</th>
                  <td>Chemistry</td>
                  <td>Mr Lin</td>
                  <td>
                    <button type="button" class="btn btn-link btn-sm px-3" data-ripple-color="dark">
                      <i class="fas fa-lightbulb"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <h2>Sophomore CHARGE Courseload</h2>
            <table class="table align-middle">
              <thead>
                <tr >
                  <th className={styles.colHeader} scope="col">Grade</th>
                  <th className={styles.colHeader} scope="col">Class</th>
                  <th className={styles.colHeader} scope="col">Teacher</th>
                  <th className={styles.colHeader} scope="col">About</th>
                </tr>
              </thead>
              <tbody>
                <tr  className={styles.colHeader}>
                  <th scope="row">10</th>
                  <td>AP World History</td>
                  <td>Ms. Carlisle</td>
                  <td>
                    <button type="button" class="btn btn-link btn-sm px-3" data-ripple-color="dark">
                      <i class="fas fa-lightbulb"></i>
                    </button>
                  </td>
                </tr>
                <tr  className={styles.colHeader}>
                  <th scope="row">10</th>
                  <td>American Literature</td>
                  <td>Ms Davis</td>
                  <td>
                    <button type="button" class="btn btn-link btn-sm px-3" data-ripple-color="dark">
                      <i class="fas fa-lightbulb"></i>
                    </button>
                  </td>
                </tr>
                <tr  className={styles.colHeader}>
                  <th scope="row">10</th>
                  <td>Concepts of Engineering</td>
                  <td>Mr Bradley</td>
                  <td>
                    <button type="button" class="btn btn-link btn-sm px-3" data-ripple-color="dark">
                      <i class="fas fa-lightbulb"></i>
                    </button>
                  </td>
                </tr>
                <tr  className={styles.colHeader}>
                  <th scope="row">10</th>
                  <td>AP Environmental Science</td>
                  <td>Ms Stanfield</td>
                  <td>
                    <button type="button" class="btn btn-link btn-sm px-3" data-ripple-color="dark">
                      <i class="fas fa-lightbulb"></i>
                    </button>
                  </td>
                </tr>
                <tr  className={styles.colHeader}>
                  <th scope="row">10</th>
                  <td>AP Research</td>
                  <td>Ms Davis</td>
                  <td>
                    <button type="button" class="btn btn-link btn-sm px-3" data-ripple-color="dark">
                      <i class="fas fa-lightbulb"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <h3>Junior CHARGE Courseload</h3>
            <table class="table align-middle">
              <thead>
                <tr >
                  <th className={styles.colHeader} scope="col">Grade</th>
                  <th className={styles.colHeader} scope="col">Class</th>
                  <th className={styles.colHeader} scope="col">Teacher</th>
                  <th className={styles.colHeader} scope="col">About</th>
                </tr>
              </thead>
              <tbody>
                <tr  className={styles.colHeader}>
                  <th scope="row">11</th>
                  <td>AP US History</td>
                  <td>Ms. Massey</td>
                  <td>
                    <button type="button" class="btn btn-link btn-sm px-3" data-ripple-color="dark">
                      <i class="fas fa-lightbulb"></i>
                    </button>
                  </td>
                </tr>
                <tr  className={styles.colHeader}>
                  <th scope="row">11</th>
                  <td>AP Lang</td>
                  <td>Ms Johnston</td>
                  <td>
                    <button type="button" class="btn btn-link btn-sm px-3" data-ripple-color="dark">
                      <i class="fas fa-lightbulb"></i>
                    </button>
                  </td>
                </tr>
                <tr  className={styles.colHeader}>
                  <th scope="row">11</th>
                  <td>Applications of Engineering</td>
                  <td>Mr Daab</td>
                  <td>
                    <button type="button" class="btn btn-link btn-sm px-3" data-ripple-color="dark">
                      <i class="fas fa-lightbulb"></i>
                    </button>
                  </td>
                </tr>
                <tr  className={styles.colHeader}>
                  <th scope="row">11</th>
                  <td>AP Physics 1</td>
                  <td>Mr Lin</td>
                  <td>
                    <button type="button" class="btn btn-link btn-sm px-3" data-ripple-color="dark">
                      <i class="fas fa-lightbulb"></i>
                    </button>
                  </td>
                </tr>
                <tr  className={styles.colHeader}>
                  <th scope="row">10</th>
                  <td>Science Fair</td>
                  <td>Mr Daab</td>
                  <td>
                    <button type="button" class="btn btn-link btn-sm px-3" data-ripple-color="dark">
                      <i class="fas fa-lightbulb"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
    );
}