import { useState } from 'react'
import './App.css'

export const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-4xl text-white text-center'>Password Generator</h1>
    </>
  )
}
