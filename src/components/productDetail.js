import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../fetcher'

//fetch API - Get product by ID 
const ProductDetail = () => {
  const [product, setProduct] = React.useState({errorMessage: '', data: {} }) //state management
  const {productId} = useParams()

  React.useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getProductById(productId)
      setProduct(responseObject)
    }
    fetchData()
  }, [productId]) //data fetch
  

  return (
    <article>
    <div className='category-products-title'>
      {product.data.title}
    </div>

    <figure>
        <div className='category-product-image-container'>
            <img src={`/category-images/${product.data.image}`} alt='product_image' />
        </div>
    </figure>

    <aside className='category-product-details'>
        <div className='category-product-info-dimensions'>
            <h3>Dimensions</h3>
            <label>{product.data.specs.dimensions}</label>
        </div>

       
        <div className='category-product-info-capacity'>
            <h3>Capacity</h3>
            <label>{product.data.specs.capacity}</label>
        </div>
    

    <div className='category-product-info-features'>
        <h3>features</h3>
        <ul>
            {product.data.features?.map((f, i) => {
                return <li key={`feature${i}`}>{f}</li>
            })}
        </ul>
    </div>
    </aside>

    <aside className='category-product-finance'>
        <div className='category-product-finance-price'>
            $pound;{product.data.price}
        </div>

         <div className='category-product-info-stock'> 
            <label>Stock Level: {product.data.stock}</label>
            <label>Free delivery</label>
        </div>  

        <div className='category-product-action'>
            <button>Add to basket</button>
        </div>
    </aside>

    <div>
        <p>{product.data.description}</p>
    </div>

 </article>  )


}
export default ProductDetail