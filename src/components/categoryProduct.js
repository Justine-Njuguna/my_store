import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const CategoryProduct = ({id, title, image, specs, features, price, stock, dimensions}) => {
  const navigate = useNavigate()
    return (
   <main>
    <article>
    <div className='category-products-title'>
        <Link to={`/products/${id}`}>{title}</Link>
    </div>

    <figure>
        <div className='category-product-image-container'>
            <img src={`/category-images/${image}`} alt='product_image' />
        </div>
    </figure>

    <aside className='category-product-details'>
        <div className='category-product-info-dimensions'>
            <h3>Dimensions</h3>
            <label>{ specs.dimensions}</label>
        </div>

        {specs.capacity &&
        <div className='category-product-info-capacity'>
            <h3>Capacity</h3>
            <label>{ specs.capacity}</label>
        </div>
    }

    <div className='category-product-info-features'>
        <h3>features</h3>
        <ul>
            {features?.map((f, i) => {
                return <li key={`feature${i}`}>{f}</li>
            })}
        </ul>
    </div>
    </aside>

    <aside className='category-product-finance'>
        <div className='category-product-finance-price'>
            $pound;(price)
        </div>

         <div className='category-product-info-stock'> 
            <label>Stock Level: {stock}</label>
            <label>Free delivery</label>
        </div>  

        <div className='category-product-action'>
            <button onClick={() => navigate(`products/${id}`)}>View Product</button>
            <button>Add to basket</button>
        </div>
    </aside>
 </article>
   </main>
  )
}

export default CategoryProduct