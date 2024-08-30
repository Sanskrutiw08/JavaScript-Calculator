import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';

function Calculator() {
  const [displayValue, setDisplayValue] = useState('0');

  const handleClick = (value) => {
    // Logic to handle button clicks
    if (value === 'C') {
      setDisplayValue('0');
    } else if (value === '=') {
      // Evaluate the expression
      try {
        setDisplayValue(eval(displayValue).toString());
      } catch {
        setDisplayValue('Error');
      }
    } else {
      setDisplayValue(prevValue =>
        prevValue === '0' ? value : prevValue + value
      );
    }
  };

  return (
    <div id="box">
      <Display value={displayValue} />

      <div className="button-container">
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'].map((val, idx) => (
          <Button key={idx} id={val} value={val} onClick={handleClick} />
        ))}
        
        <Button id="clear" value="C" onClick={handleClick} />
      </div>
    </div>
  );
}

export default Calculator;
