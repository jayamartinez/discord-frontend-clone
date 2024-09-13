import React from 'react'
import { DMButtons, DMIcon } from '../containers'
import { BsPlus } from 'react-icons/bs'

const DirectMessages = () => {
    
    // const user1 = {
    //   username:"Username",
    //   displayName: "Display Name",
    //   icon: {placeholder},
    //   status: "online",
    // }


  return (
    <div className='fixed left-[72px] h-screen
    w-[240px] m-0 flex flex-col align-middle 
    bg-gray-800 text-white shadow-lg'>
        <div className='w-[240px] h-12 shadow-sm shadow-gray-900'>
            <button type='button' 
                    className='w-[220px] h-7 bg-gray-900 rounded m-2 my-2.5 text-sm text-left'>
                <span className='font-custom font-medium m-2 text-custom-gray'>Find or start a conversation</span>
            </button>
        </div>
        <div className='w-[232px] h-2'></div>

        <div className='flex flex-col items-start'>
            <DMButtons icon="🙋" text="Friends"/>
            <DMButtons icon="🧿" text="Nitro"/>
            <DMButtons icon="🏪" text="Shop"/>
        </div>

        <h2 className='flex gap-x-20 pt-[18px] pl-2 pr-2 
            pb-[18px] ml-2 font-custom font-semibold 
            text-[12px] text-custom-gray group'>
            <span>DIRECT MESSAGES</span>
            <DMIcon icon={<BsPlus size={20} />}/>
            {/* <button type='button'><BsPlus size={20} className='dm-tooltip group-hover:scale-100'/></button> */}
        </h2>

        {/* <hr size="20" className='w-8 mx-1 border-gray-700 border-[1px] rounded-sm'/> */}
      
    </div>
  )
}

export default DirectMessages
