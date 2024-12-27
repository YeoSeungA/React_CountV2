import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Plus from './Plus';
import Minus from './Minus';

const App = () => {
  const [count, setCount] = useState(0);

  const handleUpCount = () => {
    setCount(count + 1);
  }

  const handleDownCount = () => {
    setCount(count - 1);
  }


  return (
    <div className="App">
        <p> count Home Page</p>
        <input type='text' value={count}/>
        <Plus handleUpCount={handleUpCount}/>
        <Minus handleDownCount={handleDownCount}/>
    </div>
  );
}

export default App;
