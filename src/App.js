import React from 'react';
import './App.css';

import BigComp from './components/BigComp';

function App() {
  return (
    <div className="App">
      <BigComp firstName={" Jane"} lastName={"Doe"} Age={"Age: 45"} hairColor={"Hair Color: Black"}/>

      <BigComp firstName={" John"} lastName={"Smith"} Age={"Age: 88"} hairColor={"Hair Color: Brown"}/>

      <BigComp firstName={" Millard"} lastName={"Fillmore"} Age={"Age: 50"} hairColor={"Hair Color: Brown"}/>

      <BigComp firstName={" Maria"} lastName={"Smith"} Age={"Age: 62"} hairColor={"Hair Color: Brown"}/>
    </div>
  );
}

export default App;