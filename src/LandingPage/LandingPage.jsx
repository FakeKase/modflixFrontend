import logoPic from '../assets/Logo.png'
import defaultProfilePic from '../assets/usericon.png'
import styles from './landingpage.module.css'
import Navbar from '../navbar/Navbar.jsx'

export default function LandingPage({pic, username = 'Guest'})
{
    return(
        <>
            <Navbar pic={pic} username={username}></Navbar>
            <h1 className={styles.dashboardText}>Dashboard</h1>
            <div className={styles.reportContainer}></div>
        </>
    );
}