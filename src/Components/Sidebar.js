import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow.js';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpRoundedIcon from '@material-ui/icons/ThumbUpRounded';

function Sidebar() {
    return (
        <div className = "sidebar">
          <SidebarRow selected Icon ={HomeIcon} title ="Home"/>
          <SidebarRow Icon ={ExploreIcon} title = "Explore"/>
          <SidebarRow Icon ={SubscriptionsIcon} title = "Subscriptions"/>
      <hr/>
      <SidebarRow Icon ={VideoLibraryIcon} title = "Library"/>
          <SidebarRow Icon ={HistoryIcon} title = "History"/>
          <SidebarRow Icon ={WatchLaterIcon} title = "Watch Later"/>
          <SidebarRow Icon ={ThumbUpRoundedIcon} title = "Liked Videos"/>
       <hr/>
        </div>
        
       
    );
}

export default Sidebar;
