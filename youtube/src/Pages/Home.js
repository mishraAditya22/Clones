import React from 'react'
import Heading from "../Components/Heading";
import LeftsideBar from "../Components/LeftsideBar";
import RightsideContent from "../Components/RightsideContent";
import "../Styles/Home.css";

const Home = ()=>{
  return (
    <>
        <div className='main_content'>
            <Heading/>
            <div className='body_section'>
                <div className='left_side'>
                  <LeftsideBar/>
                </div>
                <div className='right_side'>
                  <RightsideContent/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home