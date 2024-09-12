import React from 'react'
import { FaDiscord } from 'react-icons/fa'

const SidebarIcon = ({ icon, text }) => {
    if(text === "Direct Messages") {
        return(
            <div className='sidebar-icon-dm group'>
            {icon}
            <span className='sidebar-tooltip group-hover:scale-100'>{text}</span>
            </div>
        )
    } 
    else if(text === "Add A Server" || 
            text === "Explore Discoverable Servers" || 
            text === "Download Apps") {
            return (
                <div className='sidebar-icon-misc group'>
                {icon}
                <span className='sidebar-tooltip group-hover:scale-100'>{text}</span>
                </div>
            )
            

    } else {
        return (
            <div className='sidebar-icon group'>
                <div className='rounded-3xl overflow-hidden hover:rounded-xl transition-all duration-150 ease-linear'>
                    {icon}
                </div>
            <span className='sidebar-tooltip group-hover:scale-100'>{text}</span>
            </div>
        )
    }

    
}

export default SidebarIcon
