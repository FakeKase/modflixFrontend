import React, { useState } from 'react'
import './App.css'
import LoginPage from './LoginPage/LoginPage.jsx'
import LandingPage from './LandingPage/LandingPage.jsx'
import Background from './Background/Background.jsx'
import Logo from './Logo/Logo.jsx'
import mockProfilePic from './assets/rigbyMockProfilePic.png'

function App() {

  const [isLoggedIn, setLogIn] = useState(false)
  if(!isLoggedIn)
  {
      return (
        <>
            <Background></Background>
            <LoginPage loginState={setLogIn}></LoginPage>
        </>
      )
  }
  else{
    return(
      <>
        <Background></Background>
        <LandingPage pic={mockProfilePic} username='LetmeuseKase'></LandingPage>
      </>
    );
  }
}

export default App
