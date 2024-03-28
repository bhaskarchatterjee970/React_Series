import React, { useState } from 'react'
import Button from './Button'
import { BiMessageDetail } from "react-icons/bi";
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";

function Container() {
  let [name, setName] = useState("Ajay")
  let [email, setEmail] = useState("abc@gmail.com")
  let [text, setText] = useState("hello")
  


  const submitBtn=(e)=>{
    e.preventDefault();
    // console.log(e.target[0].value);
    // console.log(e.target[1].value);
    // console.log(e.target[2].value);
    setName(e.target[0].value)
    setEmail(e.target[1].value)
    setText(e.target[2].value)
  }
  return (
    <div main className='w-full h-[600px] flex items-center gap-x-2 justify-between'>
      <div left className='w-1/2 h-full   ml-16'>
        <div className='btns flex w-full items-center gap-x-4 px-8'>
          <Button 
          name="VIA SUPPORT CHAT" icon={<BiMessageDetail className='ml-1'/>}/>
          <Button name="VIA CALL" icon={<IoCall className='ml-8'/>}/>
        </div>

        <button className='font-bold outline-black outline-8 pl-[140px] mt-3 ml-12 border-4 bg-white text-black flex items-center gap-x-2 w-[450px] '>
          <IoMail/>
          <p  className='px-2 text-center font-bold'>VIA MAIL FORM</p>
        </button>

        <form 
        onSubmit={submitBtn}>
          <div className='flex  w-[450px] m-6 ml-12 flex-col'>
            <label>Name</label>
            <input type="text" name='name'
            className='p-2 border-2 border-gray-600 font-semibold' />
          </div>

          <div className='flex  w-[450px] m-6 ml-12 flex-col'>
            <label>Email</label>
            <input type="email" name='email'
            className='p-2 border-2 border-gray-600 font-semibold' />
          </div>

          <div className='flex w-[450px] ml-12 flex-col'>
            <label>Text</label>
            <textarea name='text'
            className='border-2 border-gray-600 font-semibold h-[120px]' />
          </div>

          <div className='submit w-[450px] justify-end p-4 m-2 ml-16 flex items-center text-center'>
            <button type='submit' className='bg-black text-white px-2 py-1 w-[200px] 
            rounded-md h-[40px] m text-center'>
            SUBMIT
            </button>
          </div>

          <div className='ml-20 w-[400px] h-[200px] border-2 items-center flex justify-center flex-col gap-y-1 border-black'>
            <p>Name : {name}</p>
            <p>Email : {email}</p>
            <p>Text : {text}</p>
            
          </div>
        </form>

       


      </div>
      
      
    </div>
  )
}

export default Container