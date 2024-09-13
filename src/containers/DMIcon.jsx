import React from 'react'

const DMIcon = ({ icon, text="Create DM"}) => {
  return (
    <div>
      <button>{icon}</button>
      <span className='dm-tooltip group-hover:scale-100'>{text}</span>
    </div>
    
  )
}

export default DMIcon

