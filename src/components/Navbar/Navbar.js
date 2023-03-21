import React,{useRef,useState} from 'react';
import styles from './Navbar.module.css'



function Navbar() {

    const [data,setData]=useState(false)
const referc=useRef();

    function handleLinks(){
          console.log(referc);
          if(!data){
          referc.current.style.display="block";
          setData(true)
          console.log(data)
          }
          else{
            referc.current.style.display="none";
            setData(false)
            console.log(data)
          }

    }



  return (
    <div className={styles.nav}>
    <div style={{display:"flex",justifyContent:"center"}}>
    
        <img className={styles.imgLogo} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIL7bxD5pKlJDh2WZtL-L0BD6WclizwcMmCw&usqp=CAU" width="200" height="50"/>
    
    
      <ul ref={referc}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">About Us</a></li>
      </ul>
      
      </div>
      <div  className={styles.btns}>
        <button className={styles.loginbtn}>Login</button>
        <button className={styles.signupbtn}>Sign Up</button>
      </div>
      <button  onClick={handleLinks} className={styles.barBtn}>
     <img className={styles.imgBaricon} src="https://thumbs.dreamstime.com/b/right-indent-vector-icon-isolated-white-background-outline-thin-line-website-design-mobile-app-development-illustration-189437421.jpg" width="80" height="80"/>
     </button>
    </div>
  );
}

export default Navbar;
