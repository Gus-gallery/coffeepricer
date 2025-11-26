import React from 'react'

const Midbox = () => {
  return (
    <div className="flex items-center justify-center mt-20">
        <div className="container flex flex-col items-center justify-center rounded-xl bg-backgroundsecondary border-border border-4 shadow-xl w-2/3 p-4">
            <h1 className="text-lg font-regular">Today's Coffee Price:</h1>
            <div className="bg-backgroundthird p-4 rounded-md shadow-md font-extrabold text-4xl w-1/2 mt-4">
                <div className="flex flex-row justify-between">
                    <h2>100</h2>
                    <h2>$</h2>
                </div>
                <div className="flex flex-row justify-between mt-4">
                    <h2>Per</h2>
                    <h2>Kg</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Midbox