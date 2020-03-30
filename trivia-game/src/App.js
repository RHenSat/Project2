import React, {useState} from 'react';
import './App.css';
import About from "./about"
import Home from "./home"

export default function App() {
    const [triviaData, settriviaData] = useState({});
  return (
    <div className="App">
      <header >
    <div>
      <h1>TRIVIA GAME</h1>
      <h2>Test Your Knowledge of History</h2>
    </div>
      </header>
   </div>
  );
}


