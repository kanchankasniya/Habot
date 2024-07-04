import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./Header.css"

export default function Header() {
  return (
    <div className='headerContainer'>
      <Navbar />
      <div className="header">
        <p className="headerText1">Are You a Supplier? <br></br>
          <span>Explore Matching Opportunities.</span></p>
        <div className="searchContainer">
          <div className="searchLeft">
            <div className="searchLeftContent">
              <img className='suitcase' src="/images/suitcase.png" alt="" />
              <div className="searchLeftContentText"><input type="text" className="searchLeftPlaceholder" placeholder='Search your required service here' /></div>
            </div>
          </div>
          <div className="searchRight">
            <div className="searchRightContent">
              <img className='location' src="/images/location.png" alt="" />
              <div className="searchRightContentText"><input type="text" className="searchRightPlaceholder" placeholder='Search your desired location here' /></div>
            </div>
          </div>
          <button className='searchButton'>Search</button>
        </div>
        <p className="headerText2">Are you a buyer? &nbsp; <u> Click here if you are looking to post a requirements</u> </p>
      </div>
     </div>
  )
}
