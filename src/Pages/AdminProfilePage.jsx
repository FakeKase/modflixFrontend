import { useNavigate } from "react-router-dom";
import AdminProfile from "../AdminProfile/AdminProfile";
import Navbar from "../Navbar/navbar";
import mockProfilePic from '../assets/rigbyMockProfilePic.png'

function AdminProfilePage({ pic, username }) {
  const navigate = useNavigate();

  return (
    <>
      <Navbar pic={pic || mockProfilePic} username={username || 'LetmeuseKase'} />
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: "2rem",
        }}>
        {/* <button
          onClick={() => navigate(-1)}
          style={{ background: "none", border: "none", color: "#aaa", cursor: "pointer", fontSize: 14, padding: "1rem 0" }}
        >
          ← Back
        </button> */}
      </div>
      <AdminProfile pic={pic} username={username}/>
    </>
  );
}

export default AdminProfilePage;