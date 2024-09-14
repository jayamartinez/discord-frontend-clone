import React from 'react'
import { DMButtons, DMIcon } from '../containers'
import { BsPlus } from 'react-icons/bs'
import placeholder from '../assets/placeholder.jpg'

const DirectMessages = () => {
    
    const users = [{
      username:"Username",
      displayName: "Display Name",
      icon: placeholder,
      status: "online",
    },
    {
        username:"Username2",
        displayName: "Display Name 2",
        icon: placeholder,
        status: "offline",
    },

    ]


  return (
    <div className='fixed left-[72px] h-screen
    w-[240px] m-0 flex flex-col align-middle 
    bg-gray-850 text-white shadow-lg z-0'>
        <div className='w-[240px] h-12 shadow-sm border-gray-900 shadow-gray-900'>
            <button type='button' 
                    className='w-[220px] h-7 bg-gray-900 rounded m-2 my-2.5 text-sm text-left'>
                <span className='font-custom font-medium m-2 text-custom-gray'>Find or start a conversation</span>
            </button>
        </div>
        <div className='w-[232px] h-2'></div>

        <div className='flex flex-col items-start '>
            <DMButtons icon="🙋" text="Friends" gap="gap-x-2"/>
            <DMButtons icon="🧿" text="Nitro" gap="gap-x-2"/>
            <DMButtons icon="🏪" text="Shop" gap="gap-x-2"/>
        </div>

        <h2 className='flex gap-x-20 pt-[18px] pl-[18px] pr-[8px] 
            pb-[4px] font-custom font-semibold 
            text-[12px] text-custom-gray '>
            <span>DIRECT MESSAGES</span>
            <div className='group'>
                <DMIcon icon={<BsPlus size={20} />}/>
            </div>
            {/* <button type='button'><BsPlus size={20} className='dm-tooltip group-hover:scale-100'/></button> */}
        </h2>

        <div>
            {
                users.map((user, index) => {
                    return(
                        <div key={index}> 
                            <DMButtons icon={<img src={user.icon} className='w-[32px] h-[32px] rounded-full'/>} text={user.displayName} gap="" />
                        </div>
                    )
                })
            }
            
            <DMButtons icon={<img src={placeholder} className='w-[32px] h-[32px] rounded-full'/>} text="Placeholder User" gap=""/>
        </div>

        {/* <hr size="20" className='w-8 mx-1 border-gray-700 border-[1px] rounded-sm'/> */}
      
    </div>
  )
}

export default DirectMessages
