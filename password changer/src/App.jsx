import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  const passwordref = useRef(null);
  const [length, setlength] = useState(8)
  const [number, setNumber] = useState(false)
  const [char, setchar] = useState(false)
  const [password, setpassword] = useState('');

  const copypassword = useCallback(()=>{
    passwordref.current?.select();
    
     window.navigator.clipboard.writeText(password)
  },[password] )

  const randompassword = useCallback(()=>{
    let pass = ''
    let str =" ABCDEFGHIJKLMNOPQRSTWXYZabcdefghijklmnopqrstwxyz"

    if(number) str += "0123456789"
    if(char) str += "!@#$%^&*(){}"

    for(let i =1; i<length; i++){
       let char = Math.floor(Math.random()*str.length +1)
        pass += str.charAt(char)
    }

    setpassword(pass)


  }, [number, char, length, setpassword])
 

  useEffect(()=>{
    randompassword();
  } ,[length, char, number, randompassword])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-white-800 bg-gray-700' >
      <h1 className='text-white text-center ' >password generator</h1>
          <div className='flex shadow rounded-lg overflow-hidden mb-4 text-white-600' >
            <input 
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3  '
            placeholder='password'
            readOnly
            ref={passwordref}

             />
             <button onClick={copypassword} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' >copy</button>

          </div>
          <div className='flex text-sm gap-x-2' >
            <div className='flex items-center gap-x-1' >
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=> setlength(e.target.value) }
             />
             <label >length : {length}</label>

            </div>
            <div className='flex items-center gap-x-1' >
              <input 
              type="checkbox"
              defaultChecked={number}
              id='numberinput'
              onChange={()=>{
                setNumber((prev)=>!prev);
              }}
                     
              />
              <label htmlFor='numberinput'>number </label>

            </div>
               <div className='flex items-center gap-x-1' >
              <input 
              type="checkbox"
              defaultChecked={char}
              id='charinput'
              onChange={()=>{
                setchar((prev)=>!prev);
              }}
                     
              />
              <label htmlFor='char input'>char </label>

            </div>
          </div>
    </div>
      </>
   
  )
}

export default App
