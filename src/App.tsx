import React from 'react';
import NavBar from './NavBar';
import Footer from './UtilityFooter';
import { ThemeProvider } from '@mui/material/styles';
import basetheme from './basetheme';


function App() {
  return (
    <div style={{background: "#dfdcc5"}} >
      <ThemeProvider theme={basetheme}>
      <NavBar />
      <Footer/>
      </ThemeProvider>
    </div>
  );
}

export default App;
