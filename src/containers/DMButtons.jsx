import React from 'react'

const DMButtons = ({ icon, text, gap}) => {
    return (
    <button type='button' 
    className={`flex items-center w-[222px] ${gap}
    h-[42px] mx-2 mb-0.5 hover:bg-gray-700 text-left 
    rounded font-custom font-medium text-custom-gray
    hover:text-white transition-all duration-100 
    ease-linear`}>
        <div className='mx-3'>{icon}</div>
        <span>{text}</span>
    </button>
  )
}

export default DMButtons
