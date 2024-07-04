import React from 'react'
import "./Navbar.css"

export default function Navbar() {
  return (
    <div className='navContainer'>
        <img className='habotImg' src="/images/image1.png" alt="" />
      <div className="navRight">
        <ul className='navList'>
          <li className='listItem1'><text className='p1'>Find Suppliers</text></li>
          {/* <li className='listItem2'><text className='p2'>Find Service Tags<img src="/images/tag.png" alt="" /></text></li> */}
          <li className='listItem2'><text className='p2'>Find Service Tags</text><span><img src="/images/tag.png" alt="" /></span></li>
        </ul>
        <button className='navBtn'>Login / Sign Up</button>
      </div>
    </div>
  )
}
