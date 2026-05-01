import logoPic from '../assets/Logo.png'
import defaultProfilePic from '../assets/usericon.png'
import mockGraph from '../assets/normal.jpg'
import styles from './landingpage.module.css'
import Navbar from '../navbar/Navbar.jsx'
import ReportCard from '../ReportCard/ReportCard.jsx'
import UserCard from './UserCard.jsx'

export default function LandingPage({pic, username = 'Guest'})
{
    return(
        <>
            <Navbar pic={pic} username={username}></Navbar>
            <h1 className={styles.dashboardText}>Dashboard</h1>
            <div className={styles.reportContainer}>
                <div className={styles.reportCardContainer}>
                    <ReportCard picIndex={1} Data={452} Changes={5}></ReportCard>
                    <ReportCard picIndex={2} Data={21} Changes={-1}></ReportCard>
                    <ReportCard picIndex={3} Data={67} Changes={67}></ReportCard>
                </div>
                <h1 className={styles.detailText}>Sales detail</h1>
                <div className={styles.detailContainer}>
                    <div className={styles.graphContainer}>
                        <img src={mockGraph} className={styles.graph} />
                    </div>
                    <div className={styles.topUserContainer}>
                        <h1 className={styles.topUsersText}>Top Users</h1>
                        <UserCard username='Stephan' pic={pic}></UserCard>
                        <UserCard username='Stanphe'></UserCard>
                        <UserCard username='Sphetan'></UserCard>
                    </div>
                </div>
            </div>
        </>
    );
}