import React from 'react'
import { BiMessageDetail } from "react-icons/bi";

function Button({name,icon,...rest}) {
  return (
    <button {...rest}
    className='flex h-[40px] items-center gap-x-2 w-[200px] 
    text-center px-1 py-2 bg-black text-white  rounded-md m-4'>
        {icon}
        <p className='px-2 text-center'>{name}</p>
    </button>
  )
}

export default Button