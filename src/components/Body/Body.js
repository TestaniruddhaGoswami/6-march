import React from 'react';
import styles from './Body.module.css'

function Body() {
  return (
    <div className={styles.bodyDiv}>
    <div className={styles.bodyText}>
      <p>TOTALLY FREE</p>   
      <div> 
      
        <h1><span></span>&nbsp;Let's bring your team together in onclick</h1>
        </div>  
      <p>We help you to  manage all of your Work and daily task in office</p>
      <button className={styles.bodyButton}>Get Started</button>
      </div>
      <div>
        <img className={styles.imgPic} src="https://www.orchidsinternationalschool.com/wp-content/uploads/2022/03/outdoor-73.png"/>
      </div>
    </div>
  );
}

export default Body;
