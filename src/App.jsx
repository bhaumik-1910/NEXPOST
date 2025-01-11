import React from 'react'
import Header from './components/Header'
import WelcomePage from './components/Welcome'
import Box from './components/Box'

const App = () => {
  return (
    <>
      <Header />
      <div style={{ backgroundColor: '#F6F6F6', minHeight: '100vh', padding: '20px' }}>
        <WelcomePage />
        <Box />
      </div>
    </>
  )
}

export default App
