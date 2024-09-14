import React from 'react'

const FriendsList = () => {
  return (
    <div className='friends-list'>
        <section 
        className='w-[954px] h-[48px] p-2 shadow-sm 
        bg-gray-800 shadow-gray-900 text-base
        font-custom font-semibold text-white gap-x-10'>
            <div className='w-[801px] h-[32px] flex
            flex-row mt-1'>
                {/* <div className='w-screen h-12 shadow-sm bg-gray-800 shadow-gray-900'> */}
                <div  className='my-0 mx-2 py-0.5 px-2'>
                    <span>🙋 Friends</span>
                    
                </div>

                <div className="border-l-[1px] my-0 mx-2 border-gray-700 w-[1px] h-[24px] rounded-3xl"></div>
                    
                <div className='w-[415.36px] h-[24px]'>
                    <button type='button' className='friends-icon'>Online</button>
                    <button type='button' className='friends-icon'>All</button>
                    <button type='button' className='friends-icon'>Pending</button>
                    <button type='button' className='friends-icon'>Blocked</button>
                    <button type='button' className='add-friends-icon'>Add Friend</button>
                </div>
            </div>
        </section>
        {/* <div className='p-2'>
            <div className='w-[801px] h-[32px]'>
                <div className='w-screen h-12 shadow-sm bg-gray-800 shadow-gray-900'>
                    <span>🙋 Friends</span>
                </div>
            </div>
        </div> */}
        
    </div>
    
  )
}

export default FriendsList
