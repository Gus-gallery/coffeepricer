import React from 'react'
import Top from './components/Top.jsx'
import Midbox from './components/Midbox.jsx'

function App() {
  return (
    <div className="relative">
      <Top />
      <img src="/Beans.svg" alt="Coffee Beans" className="absolute top-0 right-0 w-20 h-20 md:w-32 md:h-32 opacity-20 pointer-events-none -z-10" />
      <img src="/Cup.svg" alt="Coffee Cup" className="absolute bottom-0 left-0 w-20 h-20 md:w-28 md:h-28 opacity-20 ml-4 mb-0 pointer-events-none -z-10" />
      <Midbox />
    </div>
  )
}

export default App
