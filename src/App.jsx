import React from 'react'
import Top from './components/Top.jsx'
import Midbox from './components/Midbox.jsx'
import Coffee from './components/Coffee.jsx'

function App() {
  return (
    <div className="relative items-center justify-center min-h-screen">
      <Top />
      <img src="/Beans.svg" alt="Coffee Beans" className="absolute top-0 right-0 w-20 h-20 md:w-32 md:h-32 opacity-20 pointer-events-none -z-10" />
      <img src="/Cup.svg" alt="Coffee Cup" className="absolute bottom-0 left-0 w-20 h-20 md:w-28 md:h-28 opacity-20 ml-4 mb-2 pointer-events-none -z-10" />
      <Midbox />
      <div className="h-1/2 w-full flex items-center justify-center mt-30">
        <Coffee />
      </div>
    </div>
  )
}

export default App
