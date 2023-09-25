import React, { useState } from 'react';
import './App.css';
import Category from './components/category';


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

  const renderCategories = () => {

  // basically, this is an alternative looping method compared to the .map method
  
  //   const categories = []
  //   for (let i = 0; i < results.length; i++) {
  //     categories.push(<Category key={results[i].id} id={results[i].id} title={results.title} />)
  //   }
  //   return categories
  // }
    return results.map( c => 
      <Category key={c.id} id={c.id} title={c.title} />
    )
  }

  //Here I have learnt how to use the map element to map through our json array, and the key which acts as a UID
  return (
    <>
    <header>My Store</header>

      <section>
        <nav>
          {
           results && renderCategories()
          }
        </nav>
        <article>
          main area
        </article>
      </section>

      <footer>
        footer
      </footer>
    </>
  );
}

export default App;
