import React from 'react';
import "../Styles/Card.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const Card = ()=>{
    return (
        <>
            <div className='card'>
                <img src="https://img.freepik.com/free-vector/flat-abstract-business-youtube-thumbnail-template_23-2148913303.jpg?w=900&t=st=1690135358~exp=1690135958~hmac=9c73e14f21cd927e035c62de9f709c273a51b0c8cc3223a8f02178bda0eaa44b" alt='video_picture'/>
                <div className='card_content'>
                    <AccountCircleIcon/>
                    <p>How to Promte Your Business</p>
                </div>
                <div className='card_details'>
                    <p>Aditya Mishra</p>
                    <p>10.2M Views . 1 month ago</p>
                </div> 
            </div>
        </>
    )
};

export default Card;