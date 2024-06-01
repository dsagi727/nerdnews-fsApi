import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

function SliderButton({ direction, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`slider-button ${direction === 'left' ? 'left-0' : 'right-0'} border border-spacing-1 rounded-md`}
    >
      {direction === 'left' ? <FiChevronLeft size={30} /> : <FiChevronRight size={30} />}
    </button>
  );
}

export default SliderButton;