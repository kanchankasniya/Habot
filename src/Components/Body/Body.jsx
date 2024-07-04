import React from 'react'
import "./Body.css"
import Header from '../Header/Header'
import VideoBuyer from '../VideoBuyer/VideoBuyer'

export default function Body() {
  return (
    <>
      <Header />
      <div className='bodyContainer'>
        <div className="bodyTextContainer">
          <div className="bodyTextLeft">
            <h1 className='heading'>Ready to dive into HABOT?</h1>
            <p className='bodyText'>Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams.</p>
            <button className='bodyBtn'><text className='btnText'>Sign up Today !</text><img className='arrow' src="/images/arrow.png" alt="" /></button>
          </div>
          <div className="bodyTextRight">
            <div className="grid">
              abu dhabi
              {/* <div id="main" class="grid grid-cols-3 gap-1 justify-evenly">  
        <div class="bg-green-700 w-260 h-65">1</div>  
        <div class="bg-green-500 w-26 h-12">2</div>  
        <div class="bg-green-300 w-26 h-12">3</div>  
        <div class="bg-green-700 w-26 h-12">4</div>  
        <div class="bg-green-500 w-26 h-12">5</div>  
        <div class="bg-green-300 w-26 h-12">6</div>  
    </div>   */}
            </div>
          </div>
        </div>
        <VideoBuyer/>
      </div>
    </>
  )
}
