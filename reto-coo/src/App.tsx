import React, { useState } from 'react';
import { Image, Navbar } from 'react-bootstrap';
import './App.css';

function App() {
  const [expandFalse, setExpandFalse] = useState(false);
  return (
    <>
        <Navbar  expand={expandFalse} className='custom-navbar'>         
            <Navbar.Toggle className="me-2" aria-controls={`offcanvasNavbar-expand-${expandFalse}`} />
            <Image src="./image1.jpg" className="custom-image" rounded />          
        </Navbar>
      
    </>
  );
}

export default App;
