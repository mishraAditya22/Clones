import React from 'react';
import "../Styles/LeftsideBar.css";
import HomeIcon from '@mui/icons-material/Home';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';


const LeftsideBar = ()=>{
    return (
        <>
            <div className='item_body'>
                <div className='item_icon'>
                    <HomeIcon/>
                </div>
                <div className='item_content'>
                    <h4>Home</h4>
                </div>
            </div>
            <div className='item_body'>
                <div className='item_icon'>
                    <SmartDisplayIcon/>
                </div>
                <div className='item_content'>
                    <h4>Shorts</h4>
                </div>
            </div>
            <div className='item_body'>
                <div className='item_icon'>
                    <HistoryOutlinedIcon/>
                </div>
                <div className='item_content'>
                    <h4>History</h4>
                </div>
            </div>
            <hr/>
        </>
    )
};

export default LeftsideBar;