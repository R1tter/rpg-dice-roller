import React, { useState } from 'react';
import './App.css'

function App() {
  const [diceValue, setDiceValue] = useState<number>(0)
  const diceTypes = [4,6,8,10,12,20,100]

  const rollDice = (sides: number) => {
    const result = Math.floor(Math.random() * sides) + 1
    setDiceValue(result)
  }
  return (
    <div className='min-h-screen flex flex-col justify-center items-center bg-gray-200'>
      <div className='p-8 bg-white rounded shadow-lg'>
        <h1 className='text-2x1 mb-4'>Rolador de dados para RPG</h1>
        <div>
          {diceTypes.map((dice)=> (
            <button
            key={dice}
            className='mr-2 mb-2 px-3 py-2 bg-blue-500 text-white rounded'
            onClick={()=> rollDice(dice)}
            >
              d{dice}
            </button>
          ))}
        </div>
        {diceValue > 0 && (
          <div className='mt-4'>
            <p>Resultado <span className='font-bold'>{diceValue}</span></p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
