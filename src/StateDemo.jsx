import React, { useState } from 'react';

function StateDemo() {
  // useState hook
  const [name, setName] = useState('rodgers');
  const [grade, setGrade] = useState(75);
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    // let newCount = count + 1;
    // console.log(newCount);
    setCount(count + 1);
  };

  const handleClick = () => {
    // name = 'david';
    setName('Maingi');
    setGrade(95);
  };
  return (
    <div>
      <button onClick={handleIncrement}>{count}</button>
      <button onClick={handleClick}>click me</button>
      <p>
        My name is {name} and I got a score of {grade}{' '}
      </p>
    </div>
  );
}

export default StateDemo;
