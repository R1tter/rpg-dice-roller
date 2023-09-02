import React from 'react';

type Props = {
  results: number[];
};

const Results: React.FC<Props> = ({ results }) => {
  return (
    <div className='mt-4'>
      {results.map((result, index)=> (
        <p key={index}>Resultado {index + 1}: <span className='font-bold'>{result}</span></p>
      ))}
    </div>
  );
};

export default Results