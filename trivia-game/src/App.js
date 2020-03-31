import React, {useState,useEffect} from 'react';
import './App.css';
import About from "./about"
import Home from "./home"

export default function App() {
    const [triviadata,settriviadata] = useState ([]);
   
   
   useEffect  (() => {
   const triviadataURL = "https://opentdb.com/api.php?amount=10&category=23&difficulty=medium&type=multiple"
   const makeAPI = async () => { 
     const res = await fetch (settriviadata);
     const json = await res.json();
     settriviadata(json);
   };
   
   makeAPI();
   },[]);
   
   console.log("App - useEffect - [triviadata]",triviadata);
   
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


