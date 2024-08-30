import React from 'react';

function Button({ id, value, onClick }) {
  return (
    <button id={id} onClick={() => onClick(value)}>
      {value}
    </button>
  );
}

export default Button;
