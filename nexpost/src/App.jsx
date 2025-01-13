import './App.css'
import { Button, CssBaseline, ThemeProvider, Typography } from '@mui/material'
import { theme } from './theme'

function App() {
  return (
   <ThemeProvider theme={theme}>
    <CssBaseline />
    <Typography variant='heading' color='primary'>Hello World</Typography>
    <Button variant='contained'>Click Me</Button>
   </ThemeProvider>
  )
}

export default App
