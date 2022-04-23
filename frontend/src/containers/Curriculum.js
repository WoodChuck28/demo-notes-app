import React from 'react'
import styles from "./tableStyles.module.css"; 

export default function Curriculum()  { 
    return(
        <div style={{textAlign: 'center'}}>
            <p>Table with colgroup</p>
            <div className={styles.bigContainer}>
<table className={styles.tableHeader}>
  <colgroup span="100%"></colgroup>
  <tr className={styles.tableHeader}>
    <th className={styles.tableCells}>Class</th>
    <th className={styles.tableCells}>Grade</th>
    <th className={styles.tableCells}>Teacher</th>
    <th className={styles.tableCells}>About</th>
  </tr>
  <tr>
    <td className={styles.tableCells}>AP Human Geography</td>
    <td className={styles.tableCells}>Freshmen</td>
    <td className={styles.tableCells}>Ms Massey</td>
    <td className={styles.tableCells}><button>Click for Explanation</button></td>
  </tr>
  <tr>
  <td className={styles.tableCells}>AP Human Geography</td>
    <td className={styles.tableCells}>Freshmen</td>
    <td className={styles.tableCells}>Ms Massey</td>
    <td className={styles.tableCells}><button>Click for Explanation</button></td>
  </tr>
  <td className={styles.tableCells}>AP Human Geography</td>
    <td className={styles.tableCells}>Freshmen</td>
    <td className={styles.tableCells}>Ms Massey</td>
    <td className={styles.tableCells}><button>Click for Explanation</button></td>
</table>
</div>
        </div>
    );
}