import React, { useState, useEffect } from 'react';
import './App.css';
import Category from './components/category';
import { getCategories, getProducts } from './fetcher';
import CategoryProduct from './components/categoryProduct';

function App() {
  const [categories, setCategories] = useState({ errorMessage: '', data: [] });
  const [products, setProducts] = useState({ errorMessage: '', data: [] });

  useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getCategories();
      setCategories(responseObject);
    }
    fetchData();
  }, []);

  const handleCategoryClick = async (id) => {
    const responseObject = await getProducts(id);
    setProducts(responseObject);
  }

  const renderCategories = () => {
    return categories.data.map(c => 
      <Category 
        key={c.id} 
        id={c.id} 
        title={c.title} 
        onCategoryClick={() => handleCategoryClick(c.id)} 
      />
    )
  } 

  const renderProducts = () => {
    return products.data.map(p => 
      <CategoryProduct 
        key = {p.id}
        id = {p.id}
        title = {p.title}
        image = {p.image}
        specs = {p.specs}
        dimensions = {p.specs.dimensions}
        capacity = {p.specs.capacity}
        features = {p.features}
        price = {p.price}
        stock = {p.stock}
      />
    );
  }

  return (
    <>
      <header>My Simple Web App</header>
      <section>
        <nav>
          {categories.errorMessage && <div>Error: {categories.errorMessage}</div> }
          {categories && renderCategories()}
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
