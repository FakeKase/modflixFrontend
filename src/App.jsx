import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import LoginPage from './LoginPage/LoginPage.jsx'
import LandingPage from './LandingPage/LandingPage.jsx'
import ProductPage from './Pages/ProductPage.jsx'
import CustomerPage from './Pages/CustomerPage.jsx'
import CastPage from './Pages/CastPage.jsx'
import Background from './Background/Background.jsx'
import mockProfilePic from './assets/rigbyMockProfilePic.png'
import AdminProfilePage from './Pages/AdminProfilePage.jsx'

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [username, setUsername] = useState('LetmeuseKase')
    const [pic, setPic] = useState(mockProfilePic)

    useEffect(() => {
        document.body.style.overflow = isLoggedIn ? '' : 'hidden';
    }, [isLoggedIn]);

    const commonProps = { pic, username };

    return (
        <BrowserRouter>
            <Background />
            <Routes>
                <Route
                    path="/login"
                    element={
                        isLoggedIn
                            ? <Navigate to="/" replace />
                            : <LoginPage onLogin={() => setIsLoggedIn(true)} />
                    }
                />
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
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App