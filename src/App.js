import React, { useState } from 'react';
import './App.css';
import Category from './components/category';


function App() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])

  //I have learnt how to use the useEffect hook to and the fetch API to read data from the json file and return a promise that logs the data to the console
  React.useEffect(() => {
      fetch("http://localhost:3001/categories")
      .then(Response => Response.json())
      .then(data => {
        console.log(data)
        setCategories(data)
      })
  }, []) //never forget the array thing here because the console will keep looping and end up crashing our super duper nice server

  //this is an onCLick handler for altering the rendered UIi component, this handles the category when clicked
  const handleCategoryClick = id => {
    fetch("http://localhost:3001/products?catId = " + id)
      .then(Response => Response.json())
      .then(data => {
        console.log(data)
        setProducts(data)
      })
  }


  const renderCategories = () => {

    return categories.map( c => 
      <Category key={c.id} id={c.id} title={c.title} onCategoryClick = {() => handleCategoryClick(c.id)} />
    )
  } 

  const renderProducts = () => {
    return products.map( p => 
        <div>{p.title}</div>
      )
  }

  //Here I have learnt how to use the map element to map through our json array, and the key which acts as a UID
  return (
    <>
    <header>My Store</header>

      <section>
        <nav>
          {
           categories && renderCategories()
          }
        </nav>
        <article>
         <h1>Products</h1>
         {products && renderProducts()}
        </article>
      </section>

      <footer>
        footer
      </footer>
    </>
  );
}

export default App;
