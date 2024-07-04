import React from 'react'
import "./VideoBuyer.css"

export default function VideoBuyer() {
  return (
    <div className='VideoBuyerContainer'>
      <div className="VideoBuyerContent">
        <div className="VideoBuyerContentLeft">
            <img className='videopic' src="images/videopic.png" alt="" />
            <img className='vector' src="images/vector.png" alt="" />
        </div>
        <div className="VideoBuyerContentRight"></div>
      </div>
    </div>
  )
}
