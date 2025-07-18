import { useCallback, useEffect, useState, useRef } from 'react'
import './App.css'

export const App = () => {
  const [length, setLength] = useState(12);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  // useRef() Hook.
  const passwordRef = useRef(null);

  // Password Generation Logic
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "1234567890";
    if (charAllowed) str += "!@#$%^&*-_=+~";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);


  // Input Boxes
  const InputControl = ({ type, value, onChange, label, min, max, checked, id }) => (
    <div className='flex items-center gap-x-1'>
      <input
        type={type}
        {...(type === 'range' ? { min, max, value } : {})}
        {...(type === 'checkbox' ? { checked, id } : {})}
        className={type === 'range' ? 'cursor-pointer' : ''}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );

  // Copy Functionality
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 40);
    window.navigator.clipboard.writeText(password);
  }, [password]);
  

  // Running Function
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator])



  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button 
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={copyPasswordToClipboard}
          >Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          {/* Password Length Slider */}
          <InputControl
            type="range"
            min={8}
            max={40}
            value={length}
            onChange={e => setLength(Number(e.target.value))}
            label={`Length: ${length}`}
          />

          {/* Number Allowed Box */}
          <InputControl
            type="checkbox"
            checked={numberAllowed}
            id="numberInput"
            onChange={() => setNumberAllowed(prev => !prev)}
            label="Numbers"
          />

          {/* Character Allowed Box */}
          <InputControl
            type="checkbox"
            checked={charAllowed}
            id="charInput"
            onChange={() => setCharAllowed(prev => !prev)}
            label="Characters"
          />
        </div>
      </div>
    </>
  )
}
