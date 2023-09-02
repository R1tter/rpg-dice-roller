import React from 'react';

type Props = {
  results: number[];
  rolling: boolean;
};

const Results: React.FC<Props> = ({ results, rolling }) => {
  return (
    <div className='mt-4'>
      {results.map((result, index)=> (
        <p key={index} className={rolling ? 'animate-rolling': ''}>
          Resultado {index + 1}: <span className='font-bold'>{result}</span></p>
      ))}
    </div>
  );
};

export default Results