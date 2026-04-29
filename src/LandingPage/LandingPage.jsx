import logoPic from '../assets/Logo.png'
import defaultProfilePic from '../assets/usericon.png'
import styles from './landingpage.module.css'
import Navbar from '../navbar/Navbar.jsx'
import ReportCard from '../ReportCard/ReportCard.jsx'

export default function LandingPage({pic, username = 'Guest'})
{
    return(
        <>
            <Navbar pic={pic} username={username}></Navbar>
            <h1 className={styles.dashboardText}>Dashboard</h1>
            <div className={styles.reportContainer}>
                <ReportCard picIndex={1} Data={452} Changes={5}></ReportCard>
                <ReportCard picIndex={2} Data={21} Changes={-1}></ReportCard>
                <ReportCard picIndex={3} Data={67} Changes={67}></ReportCard>
            </div>
        </>
    );
}