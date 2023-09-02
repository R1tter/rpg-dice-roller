import React from 'react';

type Props = {
  sides: number;
  onClick: (sides: number) => void;
};

const DiceButton: React.FC<Props> = ({ sides, onClick }) => {
  return (
    <button className='mr-2 mb-2 py-2 bg-blue-500 text-white rounded' onClick={()=> onClick(sides)}>
      d{sides}
    </button>
  );
};

export default DiceButton;