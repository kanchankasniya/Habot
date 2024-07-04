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
        <div className="VideoBuyerContentRight">
          <div className="VideoBuyerHeading">
            <div className="buyer">Buyer</div>
            <div className="supplier">Supplier</div>
          </div>
          <ul className="VideoBuyerList">
            <li className="VideoBuyerListItems">Post your requirements.</li>
            <li className="VideoBuyerListItems">Sit back for multiple suppliers to contact you.</li>
            <li className="VideoBuyerListItems">Choose among the suppliers based on the ratings and reviews.</li>
          </ul>
        </div>
      </div>f 
    </div>
  )
}
