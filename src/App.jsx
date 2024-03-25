import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'


function App() {
const [length,setLength] = useState(8);
const [number,setNumber] = useState(false);
const [char,setChar] = useState(false);
const [password,setPassword] = useState("");

const passwordGenerator = useCallback(()=>{
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

  if(number) str +="123456789"
  if(char) str +="@#$%*~"

  //generting random password
  for(let i =1; i<=length; i++){
    let char = Math.floor(Math.random()*str.length+1);
    pass += str.charAt(char);
  }
  setPassword(pass);
}, [length,number,char,setPassword])


useEffect(()=>{passwordGenerator()
},[length,number,char])

// useRef hook -->to take ref of a element here copy button
const passwordRef = useRef(null)

const copyToClipBoard = useCallback(()=>{
  window.navigator.clipboard.writeText(password)
  passwordRef.current?.select()
  // passwordRef.current?.setSelectionRange(0,5)
},[password])

 return(
  <>
    
    <div className='w-full max-w-md mx-auto px-5 py-1 rounded-lg text-orange-400 bg-slate-800
    my-8'>
      <h1 className='text-3xl text-center text-white'>Password Generator</h1>
      <div className='flex m-6  rounded-md'>
        <input
        type="text"
        value = {password}
        className='bg-white rounded-lg w-full p-2 mx-4'
        placeholder='password'
        ref={passwordRef}/>
        <button className='bg-blue-400 rounded-md px-3  text-white'
        onClick={copyToClipBoard}
        >Copy</button>
      </div>
      
      <div className='flex text-sm gap-2'>
        <div className='flex items-center gap-x-2'>
            <input
            type="range"
            min={6}
            max={50}
            value={length}
            onChange={(e)=>{ setLength(e.target.value)}}
          />
            <label>length:{length}</label>
        </div>

        <div className='gap-x-1 flex items-center pl-1'>
        <input
        type="checkbox"
        defaultChecked={number}
        onChange={(e)=>{setNumber((prev)=>!prev)}}
        />
        <label>Number</label>
        </div>

        <div className='gap-x-1 flex items-center pl-1'>
        <input
        type="checkbox"
        defaultChecked={char}
        onChange={(e)=>{setChar((prev)=>!prev)}}/>
        <label>Character</label>
        </div>
        
      </div>
    </div>
  </>
 ) 
}

export default App
