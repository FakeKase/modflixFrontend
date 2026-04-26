import Logo from '../Logo/Logo.jsx'
import styles from './loginPage.module.css'

export default function LoginPage()
{
    return(
        <>
            <div className={styles.loginContainer}>
                <Logo></Logo>
                <h1 className={styles.adminText}>-ADMIN-</h1>
                <button className={styles.toLogin}>LOGIN</button>
            </div>        
        </>
    );
}