import React, { useState } from 'react';
import { Image, Navbar } from 'react-bootstrap';
import AppsIcon from '@mui/icons-material/Apps';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import './App.css';

function App() {
  const [expandFalse, setExpandFalse] = useState(false);
  return (
    <>
      <Navbar expand={expandFalse} className='custom-navbar'>
        <Navbar.Toggle className="me-2" aria-controls={`offcanvasNavbar-expand-${expandFalse}`} />
        <Image src="./image1.jpg" className="custom-image" rounded />
        <div id='userName'>
          <h6 className='userShown'>User 6</h6>
          <p><b>Terminal:</b> 01 BOG</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <AccountCircleTwoToneIcon className='icons' />
          <SearchOutlinedIcon className='icons' />
          <AppsIcon className='icons' />
        </div>
      </Navbar>
    </>
  );
}

export default App;
