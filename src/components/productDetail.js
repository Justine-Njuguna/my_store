import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../fetcher'
import styled from 'styled-components'

const ProductDetail = () => {
  const [product, setProduct] = useState({ errorMessage: '', data: {} })
  const { productId } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getProductById(productId)
      setProduct(responseObject)
    }
    fetchData()
  }, [productId])

  const createMarkup = () => {
    return { __html: product?.data?.description };
  }

  return (
    <ProductInfoArticle>
      <ProductTitle>
        {product.data.title}
      </ProductTitle>

      <ProductImageContainer>
        <ProductImage src={`/category-images/${product.data.image}`} alt={product.data.title} />
      </ProductImageContainer>

      <ProductInfo>
        <ProductInfoHeader>Dimensions</ProductInfoHeader>
        <label>{product.data.specs?.dimensions}</label>
      </ProductInfo>

      {product.data.specs?.capacity &&
        <ProductInfo>
          <ProductInfoHeader>Capacity</ProductInfoHeader>
          <label>{product.data.specs?.capacity}</label>
        </ProductInfo>
      }

      <ProductInfo>
        <ProductInfoHeader>Features</ProductInfoHeader>
        <ul>
          {product.data.features?.map((f, i) => (
            <ProductInfoListItem key={`feature${i}`}>{f}</ProductInfoListItem>
          ))}
        </ul>
      </ProductInfo>

      <ProductInfoFinancePrice>
        &pound;{product.data.price}
      </ProductInfoFinancePrice>

      <ProductInfoStock>
        <ProductInfoStockLabel>Stock Level: {product.data.stock}</ProductInfoStockLabel>
        <ProductInfoStockLabel>Free Delivery</ProductInfoStockLabel>
      </ProductInfoStock>

      <ProductInfoAction>
        <ProductInfoActionButton>Add to Basket</ProductInfoActionButton>
      </ProductInfoAction>

      <ProductDescription dangerouslySetInnerHTML={createMarkup()}></ProductDescription>
    </ProductInfoArticle>
  )
}

export default ProductDetail

const ProductInfoArticle = styled.article`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin: 20px;
`

const ProductTitle = styled.div`
  grid-column: 1 / span 3;
  color: darkslategray;
  font-weight: bold;
  font-size: 1.5rem;
  padding-left: 10px;
`

const ProductImageContainer = styled.div`
  grid-column: 1 / span 3;
  padding: 10px;
  width: 100%;
  text-align: center;
`

const ProductImage = styled.img`
  max-width: 100%;
  max-height: 300px;
  object-fit: contain;
`

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`

const ProductInfoHeader = styled.h3`
  margin: 0;
`

const ProductInfoListItem = styled.li`
  list-style-type: disc;
  margin-left: 20px;
`

const ProductInfoFinancePrice = styled.div`
  grid-column: 1 / span 3;
  font-size: 1.2rem;
  text-align: center;
`

const ProductInfoStock = styled.div`
  grid-column: 1 / span 3;
`

const ProductInfoStockLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`

const ProductInfoAction = styled.div`
  grid-column: 1 / span 3;
  text-align: center;
`

const ProductInfoActionButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`

const ProductDescription = styled.div`
  grid-column: 1 / span 3;
`
