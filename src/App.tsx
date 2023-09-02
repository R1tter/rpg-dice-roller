import { useState } from 'react';
import './App.css'
import DiceButton from './components/DiceButton';
import Results from './components/Results';

function App() {
  const [results, setResults] = useState<number[]>([]);
  const [rolling, setRolling] = useState<boolean>(false);
  const diceTypes = [4,6,8,10,12,20,100]

  const rollDice = (sides: number, times: number = 1): number[] => {
    const rolls: number[] = [];
    for (let i = 0; i < times; i++) {
      rolls.push(Math.floor(Math.random() * sides) + 1 );
    }
    return rolls;
  }

  const handleRoll = (sides: number, times: number = 1) => {
    setRolling(true);
    setTimeout(() => {
      const rolls = rollDice(sides, times);
      setResults(rolls);
      setRolling(false);
    }, 1000);
  };

  const handleAdvantage = () => {
    const rolls = rollDice(20, 2);
    setResults([Math.max(...rolls)]);
  };

  const handleDisadvantage = () => {
    const rolls = rollDice(20, 2);
    setResults([Math.min(...rolls)]);
  };

  const handleSuccesses = (times: number) => {
    const rolls = rollDice(10, times);
    let successes = rolls.filter(roll => roll > 6).length;
    const criticalFailures = rolls.filter(roll => roll === 1).length;

    successes -= criticalFailures;

    setResults([successes])
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-200">
      <div className="p-8 bg-white rounded shadow-lg">
        <h1 className="text-2xl mb-4">Rolador de Dados para RPG</h1>
        <div>
          {diceTypes.map((dice) => (
            <DiceButton key={dice} sides={dice} onClick={() => handleRoll(dice)} />
          ))}
          <button className="mr-2 mb-2 px-3 py-2 bg-green-500 text-white rounded" onClick={handleAdvantage}>Vantagem</button>
          <button className="mr-2 mb-2 px-3 py-2 bg-red-500 text-white rounded" onClick={handleDisadvantage}>Desvantagem</button>
          <button className="mr-2 mb-2 px-3 py-2 bg-yellow-500 text-white rounded" onClick={() => handleSuccesses(10)}>10 Sucessos</button>
        </div>
        <Results results={results} rolling={rolling} />
      </div>
    </div>
  );
}

export default App
