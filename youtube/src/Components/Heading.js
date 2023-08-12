import React from "react";
import "../Styles/Heading.css";
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Heading = ()=>{
    return (
        <>
            <div className="header_box">
                <div className="header_logo">
                    <MenuSharpIcon/>
                    <img src="https://download.logo.wine/logo/YouTube/YouTube-Logo.wine.png"
                        alt="youTube_Logo"/>
                </div>
                <div className="header_search">
                    <input placeholder="search" type="text"/>
                    <SearchSharpIcon className="header_search_btn"/>
                </div>
                <div className="header_icons">
                    <VideoCallIcon/>
                    <AppsIcon/>
                    <NotificationsIcon/>
                    <AccountCircleIcon/>
                </div>
            </div>
        </>
    )
};

export default Heading;