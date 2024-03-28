import React from 'react'

function Navbar() {
  return (
    <div className='w-full h-[70px] px-10 flex items-center justify-between border-2'>
        <div className=' w-[100px] mr-8'>
            <img className='h-[50px] mr-8' src="https://t4.ftcdn.net/jpg/05/11/42/57/360_F_511425791_B8lxN9DiKrre6FEB9gAzNLcjfooo4hhr.jpg" alt="" />
        </div>
        <div className='w-[180px] flex gap-x-2 justify-evenly items-center font-bold'>
            <a>Home</a>
            <a>About</a>
            <a>Contact</a>
        </div>
    </div>
  )
}

export default Navbar