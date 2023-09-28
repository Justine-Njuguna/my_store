import React from 'react'

const CategoryProduct = ({ title, image, specs, features, price, stock }) => {
  return (
   <main>
    <div className='category-products-title'>
        {title}
    </div>

    <figure>
        <div className='category-product-image-container'>
            <img src={`./assets/${image}`} alt='' />
        </div>
    </figure>

    <aside>
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
        {features && features.map(f => <li key={f}>{f}</li>)}
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
            <button>View Product</button>
            <button>Add to basket</button>
        </div>
    </aside>

   </main>
  )
}

export default CategoryProduct