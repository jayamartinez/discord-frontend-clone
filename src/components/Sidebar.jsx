import React from 'react'
import { SidebarIcon } from '../containers'
import { FaDiscord, FaPlus } from 'react-icons/fa'
import { BsPlus } from 'react-icons/bs'
import placeholder from "../assets/placeholder.jpg"


const Sidebar = () => {
  return (
    <div className='fixed top-0 left-0 h-screen
    w-[72px] m-0 flex flex-col align-middle bg-gray-900 text-white
    shadow-lg'>
      <SidebarIcon icon={<FaDiscord size={28}/>} text="Direct Messages"/>

      <hr size="20" className='w-8 mx-auto border-gray-700 border-[1px] rounded-sm'/>

      <SidebarIcon icon={ <img src={placeholder} className='overflow-hidden'/>} text="Placeholder Text"/>

      <SidebarIcon icon={ <img src={placeholder} className='overflow-hidden'/>} text="Placeholder Text"/>

      <SidebarIcon icon={ <img src={placeholder} className='overflow-hidden'/>} text="Placeholder Text"/>
 
      <SidebarIcon icon={<BsPlus size={28}/>} text="Add A Server"/>

      <hr size="20" className='w-8 mx-auto border-gray-700 border-[1px] rounded-sm'/>

    </div>
  )
}

export default Sidebar
