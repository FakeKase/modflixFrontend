import logoPic from '../assets/Logo.png'
import defaultProfilePic from '../assets/usericon.png'
import styles from './navbar.module.css'

export default function Navbar({pic, username = 'Guest'})
{
    return (
        <>
            <div className={styles.headerContainer}>
                            <img src={logoPic} className={styles.logo}/>
                            <div className={styles.navbarContainer}>
                                <div className={styles.navbarText}>
                                    <h1 className={styles.home}>Home</h1>
                                    <h1 className={styles.product}>Products</h1>
                                    <h1 className={styles.cast}>Cast</h1>
                                    <h1 className={styles.customer}>Customers</h1>
                                    <li className={styles.reportList}>
                                        <h1 className={styles.reports}>Reports</h1>
                                        <div className={styles.dropdown}>
                                            <ul>Sales</ul>                       
                                            <ul>Users</ul>                       
                                            <ul>Popularity</ul>                       
                                        </div>
                                    </li>
                                    <h1 className={styles.management}>Management</h1>
                                </div>
                            </div>        
                            <div className={styles.navbarProfile}>
                                <img className={styles.profilePic} src={pic || defaultProfilePic}/>
                                <h1 className={styles.username}>{username.length > 10 ? username.slice(0, 10) + '...' : username}</h1>
                            </div>
                        </div>
        </>
    );
}