import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
function App() {
  const [color, setColor] = useState([]);

  const digits = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
  ];

  const getRandomColor = () => {
    const color = new Array(6)
      .fill('')
      .map(() => digits[Math.floor(Math.random() * digits.length)])
      .join('');

    return `#${color}`;
  };

  useEffect(() => {
    const newColors = [];
    for (let i = 0; i < 3; i++) {
      newColors.push(getRandomColor());
    }
    setColor(newColors);
  }, []);

  const handleClick = (event) => {
    event.preventDefault();

    const clickedColor = event.target.value;

    if (clickedColor === color[number]) {
      console.log('Correct!');
      const newColors = [];
      for (let i = 0; i < 3; i++) {
        newColors.push(getRandomColor());
      }
      setColor(newColors);
    } else {
      console.log('Please Try Again');
    }
  };

  const choices = color.map((input, index) => {
    return (
      <button
        key={index}
        className='colorButton'
        onClick={handleClick}
        value={input}
      >
        {input}
      </button>
    );
  });

  const numGenerator = () => {
    return Math.floor(Math.random() * 3);
  };

  const number = numGenerator();
  return (
    <div className='App'>
      <div>
        <div className='box' style={{ backgroundColor: color[number] }}>
          Guess Me!
        </div>
        {choices}
      </div>
    </div>
  );
}

export default App;
