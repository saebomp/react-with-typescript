import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [people, setPeople] = useState([
    {
      name: "LeBron James",
      age: 35,
      img: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      note: "Allegeric to staying on the same team",
    },
    {
      name: "Kobe Bryant",
      age: 42,
      img: "https://fullpresscoverage.com/wp-content/uploads/2020/01/101524695-457220551.jpg"
    }
  ])


  return (
    <div className="App">
      <h1>People invited to my PARTY</h1>
    </div>
  );
}

export default App;


// https://www.youtube.com/watch?v=jrKcJxF0lAU
// 22:23