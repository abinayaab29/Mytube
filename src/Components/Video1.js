import React from 'react';
import './Video1.css';
import Avatar from "@material-ui/core/Avatar";

function Video1({image , title , channel , view , time,channelImage}) {
    return (
        <div className = "videoCard">
            <img className="thumbnail" src ={image} alt=""/>
            <div className = "videoCard_info">
               <Avatar className ="VideoCard_avatar" alt = {channel} src={channelImage}/>
               <div className = "video_text" >
               <h4>{title}</h4>
               <p>{channel}</p>
               <p>
                {view}.{time}
               </p>
                </div>
            </div>
        </div>
    );
}

export default Video1;
