import React from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'

const ProductTitle = styled.div`
grid-column: 1 / span 3;
color: darkslategray;
font-weight: bold;
font-size: 1.5rem;
padding-left: 10px;
`

const ProductImageContainer = styled.div `
    padding: 10px;
    width: 60%;
`

const ProductImageContainerImage = styled.img `
width: 474px;
height: 355px;
`

const ProductInfo = styled.div `
    display: flex;
    flex-direction: column;
`

const CategoryProduct = ({id, title, image, specs, features, price, stock, dimensions}) => {
  const navigate = useNavigate()
    return (
    <article>
    <ProductTitle>
        <Link to={`/products/${id}`}>{title}</Link>
    </ProductTitle>

    <figure>
        <ProductImageContainer>
            <ProductImageContainerImage src={`/category-images/${image}`} alt='product_image' />
        </ProductImageContainer>
    </figure>

    <aside className='category-product-details'>
        <ProductInfo>
            <h3>Dimensions</h3>
            <label>{ specs.dimensions}</label>
        </ProductInfo>

        {specs.capacity &&
        <ProductInfo>
            <h3>Capacity</h3>
            <label>{ specs.capacity}</label>
        </ProductInfo>
    }

    <div className='category-product-info-features'>
        <h3>Features</h3>
        <ul>
            {features?.map((f, i) => {
                return <li key={`features${i}`}>{f}</li>
            })}
        </ul>
    </div>
    </aside>

    <aside className='category-product-info-finance'>
        <div className='category-product-info-finance-price'>
            &pound;{price}
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
  )
}

export default CategoryProduct