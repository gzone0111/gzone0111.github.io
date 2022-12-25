import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutMe from './Pages/AboutMe';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import HomePage from './Pages/Home';
import Projects from './Pages/Project';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});




function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
        <Router>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/about' element={<AboutMe/>}/>
            <Route path='/projects' element={<Projects/>}/>
          </Routes>

        </Router>
  
      </ThemeProvider>
   
  );
}

export default App;
