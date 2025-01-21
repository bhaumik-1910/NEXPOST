import React from 'react'
import WelcomePage from './components/Welcome'
import Box from './components/Box'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from './theme'
import Header from './layout/Header'

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Header />
        <div style={{ backgroundColor: '#F6F6F6', minHeight: '100vh', padding: '20px' }}>
          <WelcomePage />
          <Box />
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
