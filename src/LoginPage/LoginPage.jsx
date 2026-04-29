import Logo from '../Logo/Logo.jsx'
import styles from './loginPage.module.css'
import logoPic from '../assets/Logo.png'

export default function LoginPage({loginState})
{

    return(
        <>
            <div className={styles.loginContainer}>
                <img src={logoPic} className={styles.logo}/>
                <h1 className={styles.adminText}>-ADMIN-</h1>
                <button className={styles.toLogin} onClick={() => {console.log("clicked!"); loginState(true);}}>LOGIN</button>
            </div>        
        </>
    );
}