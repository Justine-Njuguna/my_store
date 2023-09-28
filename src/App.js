import React, { useState } from 'react';
import './App.css';
import Category from './components/category';
import { getCategories, getProducts } from './fetcher'

function App() {
  const [categories, setCategories] = useState({ errorMessage: '', data: [] })
  const [products, setProducts] = useState({ errorMessage: '', data: [] })

  //I have learnt how to use the useEffect hook to and the fetch API to read data from the json file and return a promise that logs the data to the console
  React.useEffect(() => {
    const fetchData = async () => {
      const responseObject= await getCategories()
      setCategories(responseObject)
    }
    fetchData()
  }, []) //never forget the array thing here because the console will keep looping and end up crashing our super duper nice server

  //this is an onCLick handler for altering the rendered UIi component, this handles the category when clicked
  const handleCategoryClick = id => {
    const fetchData = async () => {
      const responseObject= await getProducts(id)
      setProducts(responseObject)
    }
    fetchData()
  }

//used to render categories
  const renderCategories = () => {

    return categories.data.map( c => 
      <Category key={c.id} id={c.id} title={c.title} onCategoryClick = {() => handleCategoryClick(c.id)} />
    )
  } 

  const renderProducts = () => {
    return products.data.map(p => <div key={p.id}>{p.title}</div>)
  }
  

  //Here I have learnt how to use the map element to map through our json array, and the key which acts as a UID
  return (
    <>
    <header>My Store</header>

      <section>
        <nav>
          {categories.errorMessage && <div>Error: {categories.errorMessage}</div> }
          {
            categories && renderCategories()
          } 
        </nav>
        <article>
         <h1>Products</h1>
         {products.errorMessage && <div>Error: {products.errorMessage}</div>}
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
