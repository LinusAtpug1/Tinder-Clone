import  './Header.css';
import React from 'react';
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';

function Header() {
    return (
        <div className="header">
           
           <IconButton>
             <AccountCircle fontSize="large" className="header __icon"/>
           </IconButton>
           <img src="https://seeklogo.com/images/T/tinder-logo-FAAE852EC0-seeklogo.com.png" className="header__logo" alt=""     
           />
           <IconButton>
             <ForumIcon fontSize="large" className="header __icon" />
           </IconButton>
           
        </div>
    )
}

export default Header;
