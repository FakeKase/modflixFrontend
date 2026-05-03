import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useNavigate, NavLink } from 'react-router-dom'
import './App.css'
import LoginPage from './LoginPage/LoginPage.jsx'
import LandingPage from './LandingPage/LandingPage.jsx'
import ProductPage from './Pages/ProductPage.jsx'
import CustomerPage from './Pages/CustomerPage.jsx'
import CastPage from './Pages/CastPage.jsx'
import Background from './Background/Background.jsx'
import mockProfilePic from './assets/rigbyMockProfilePic.png'
import AdminProfilePage from './Pages/AdminProfilePage.jsx'
import ManagementDashboard from './components/ManagementDashboard.jsx';

//ของ management
import Signup        from './components/Signup.jsx';
import AdminAccounts from './components/AdminAccounts.jsx';
import Sessions      from './components/Sessions.jsx';
import LoginActivity from './components/LoginActivity.jsx';
import CreateAdmin   from './components/CreateAdmin.jsx';
import Navbar from './Navbar/Navbar.jsx'; 

//data management
const INITIAL_DATA = [
    { id: '0001', name: 'KIM MINJEONG', role: 'SUPER ADMIN', login: '12/12/24 01:03 PM', email: 'winrina@gmail.com', device: 'Mac',     ip: '203.0.113.1', last: '1 min ago',  risk: 'LOW',    time: 'MAR 23, 10:15', event: 'LOGIN' },
    { id: '0002', name: 'NUCH',         role: 'ADMIN',       login: '12/12/24 01:03 PM', email: 'winrina@gmail.com', device: 'Phone',   ip: '101.51.22.9', last: '5 min ago',  risk: 'HIGH',   time: 'MAR 23, 10:15', event: 'LOGIN' },
    { id: '0003', name: 'LISA',         role: 'ADMIN',       login: '12/12/24 01:03 PM', email: 'winrina@gmail.com', device: 'Windows', ip: '101.51.22.9', last: '1 min ago',  risk: 'MEDIUM', time: 'MAR 23, 10:15', event: 'LOGIN' },
    { id: '0004', name: 'JENNIE',       role: 'ADMIN',       login: '12/12/24 01:03 PM', email: 'winrina@gmail.com', device: 'Mac',     ip: '203.0.113.1', last: '2 days ago', risk: 'LOW',    time: 'MAR 23, 10:15', event: 'LOGIN' },
    { id: '0005', name: 'KARINA',       role: 'ADMIN',       login: '12/12/24 01:03 PM', email: 'winrina@gmail.com', device: 'Mac',     ip: '101.51.22.9', last: '1 min ago',  risk: 'LOW',    time: 'MAR 23, 10:15', event: 'LOGIN' },
    { id: '0006', name: 'NINGNING',     role: 'ADMIN',       login: '12/12/24 01:03 PM', email: 'winrina@gmail.com', device: 'Mac',     ip: '101.51.22.9', last: '5 min ago',  risk: 'MEDIUM', time: 'MAR 23, 10:15', event: 'LOGIN' },
];

function LoginRoute({ isLoggedIn, onLogin }) {
  const navigate = useNavigate();
  return isLoggedIn
    ? <Navigate to="/" replace />
    : <LoginPage
        onLogin={onLogin}
        onSignup={() => navigate('/signup')}
      />;
}


function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [username, setUsername] = useState('LetmeuseKase')
    const [pic, setPic] = useState(mockProfilePic)

    useEffect(() => {
        document.body.style.overflow = isLoggedIn ? '' : 'hidden';
    }, [isLoggedIn]);

    const [data, setData]             = useState(INITIAL_DATA);

    const commonProps = {isLoggedIn, username, pic,};

    const [signupUser, setSignupUser] = useState(() => {
        const saved = localStorage.getItem('user');
        return saved ? JSON.parse(saved) : null;
    });

    const [signupList, setSignupList] = useState(() => {
        const saved = localStorage.getItem('signupList');
        return saved ? JSON.parse(saved) : [];
    });

    const handleSignup = (formData) => {
        setSignupUser(formData);
        localStorage.setItem('user', JSON.stringify(formData));
        const newList = [...signupList, formData];
        setSignupList(newList);
        localStorage.setItem('signupList', JSON.stringify(newList));
    };

    const handleDelete = (id) => {
        setData(prev => prev.filter(item => item.id !== id));
    };

    const handleAddAdmin = (newAdmin) => {
        const nextId = String(data.length + 1).padStart(4, '0');
        const now    = new Date();
        const dateStr = `${String(now.getMonth()+1).padStart(2,'0')}/${String(now.getDate()).padStart(2,'0')}/${String(now.getFullYear()).slice(-2)} ${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')} ${now.getHours() >= 12 ? 'PM' : 'AM'}`;
        const monthNames = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
        const timeStr = `${monthNames[now.getMonth()]} ${now.getDate()}, ${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;

        const entry = {
            id:     nextId,
            name:   newAdmin.fullname.toUpperCase(),
            role:   newAdmin.role || 'ADMIN',
            login:  dateStr,
            email:  newAdmin.email,
            device: 'Mac',
            ip:     '192.168.1.1',
            last:   '1 min ago',
            risk:   'LOW',
            time:   timeStr,
            event:  'LOGIN',
        };
        setData(prev => [...prev, entry]);
    };

    return (
        <BrowserRouter>
            <Background />
            <Routes>

                {/*  Login  */}
                <Route path="/login" element={
                    <LoginRoute
                        isLoggedIn={isLoggedIn}
                        onLogin={() => setIsLoggedIn(true)}
                    />
                } />

                {/* Signup */}
                <Route path="/signup" element={<Signup onSignup={handleSignup} onLoginSuccess={() => setIsLoggedIn(true)}/>} />

                <Route
                    path="/"
                    element={
                        isLoggedIn
                            ? <LandingPage {...commonProps} />
                            : <Navigate to="/login" replace />
                    }
                />
                <Route
                    path="/products"
                    element={
                        isLoggedIn
                            ? <ProductPage {...commonProps} />
                            : <Navigate to="/login" replace />
                    }
                />
                <Route
                    path="/cast"
                    element={
                        isLoggedIn
                            ? <CastPage {...commonProps} />
                            : <Navigate to="/login" replace />
                    }
                />
                <Route
                    path="/customers"
                    element={
                        isLoggedIn
                            ? <CustomerPage {...commonProps} />
                            : <Navigate to="/login" replace />
                    }
                />
                <Route
                    path="/admin-profile"
                    element={
                        isLoggedIn
                            ? <AdminProfilePage {...commonProps} onSave={(newUsername) => setUsername(newUsername)} />
                            : <Navigate to="/login" replace />
                    }
                />

                <Route path="/management/*" element={
                    isLoggedIn
                        ? <ManagementDashboard
                            data={data}
                            signupList={signupList}
                            handleDelete={handleDelete}
                            handleAddAdmin={handleAddAdmin}
                            user={signupUser}
                            pic={mockProfilePic} 
                            username='LetmeuseKase'
                        />
                        : <Navigate to="/login" replace />
                } />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App