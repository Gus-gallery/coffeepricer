import React from 'react'
import Index from './Index'

const Midbox = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 z-10">
            <div className="container flex flex-col items-center justify-center rounded-xl bg-backgroundsecondary border-border border-2 shadow-xl w-2/3 p-4">
                <h1 className="text-lg font-regular">Coffee Price:</h1>
                <Index />
            </div>
            <p className="text-xs font-regular text-third mt-8 md:mt-16">Because we love coffee, we keep up with the price!</p>
    </div>
  )
}

export default Midbox