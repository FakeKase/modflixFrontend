import React, { useState } from 'react'
import './App.css'
import LoginPage from './LoginPage/LoginPage.jsx'
import Background from './Background/Background.jsx'
import Logo from './Logo/Logo.jsx'

function App() {

  const [isLoggedIn, setLogIn] = useState(false)
  if(!isLoggedIn)
  {
      return (
        <>
            <Background></Background>
            <LoginPage></LoginPage>
        </>
      )
  }
  else{
    return(
      <>
        <Background></Background>
      </>
    );
  }
}

export default App
