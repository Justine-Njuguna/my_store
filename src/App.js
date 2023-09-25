import React, { useState } from 'react';
import './App.css';

function App() {
  const [results, setResults] = useState([])

  //I have learnt how to use the useEffect hook to and the fetch API to read data from the json file and return a promise that logs the data to the console
  React.useEffect(() => {
      fetch("http://localhost:3001/categories")
      .then(Response => Response.json())
      .then(data => {
        console.log(data)
        setResults(data)
      })
  }, []) //never forget the array thing here because the console will keep looping and end up crashing our super duper nice server

  //Here I have learnt how to use the map element to map through our json array, and the key which acts as a UID
  return (
    <div className="App">
      {results.map(d => (
        <div key={d.id}>{d.title}</div>
      ))}
    </div>
  );
}

export default App;
