import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import LoginPage from './LoginPage/LoginPage.jsx'
import LandingPage from './LandingPage/LandingPage.jsx'
import ProductPage from './Pages/ProductPage.jsx'
import Background from './Background/Background.jsx'
import mockProfilePic from './assets/rigbyMockProfilePic.png'

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        document.body.style.overflow = isLoggedIn ? '' : 'hidden';
    }, [isLoggedIn]);

    return (
        <BrowserRouter>
            <Background />  {/* ← outside Routes, always visible */}
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
                            ? <LandingPage pic={mockProfilePic} username='LetmeuseKase' />
                            : <Navigate to="/login" replace />
                    }
                />
                <Route
                    path="/products"
                    element={
                        isLoggedIn
                            ? <ProductPage pic={mockProfilePic} username='LetmeuseKase' />
                            : <Navigate to="/login" replace />
                    }
                />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App