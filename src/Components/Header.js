import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import AppsSharpIcon from '@material-ui/icons/AppsSharp';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


function Header() {
    return (
        <div className = "header">
           <div className = "header_left">
               <MenuIcon/> 
               <img className = "header_logo"
               src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/320px-YouTube_Logo_2017.svg.png" 
               alt = "" />
            </div>
            <div className = "header_input">
               
            <input placeholder="Search" type = "text" />
            
                <SearchIcon className = "input_button"/>
              
               <MicIcon />
            </div>
            <div className = "header_icons">
             <VideoCallSharpIcon className= "header_icon"/>
             <AppsSharpIcon className= "header_icon"/>
             <NotificationsIcon className= "header_icon"/>
             <AccountCircleIcon className= "header_icon"/>
            </div> 
        </div>
    )
}

export default Header
