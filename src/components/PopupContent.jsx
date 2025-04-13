import React from 'react'
import { createPortal } from 'react-dom'

const PopupContent = ({copied}) => {
  return createPortal(
    <section>
        {copied && (
            <div style={{position:"absolute", marginTop:"5rem"}}>Copied to clipboard.</div>
        )}
    </section>,
    document.querySelector('#popup-content')
  )
  
}

export default PopupContent