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

const ProductInfo = styled.div`
  margin-bottom: 0px;
`

const ProductInfoHeader = styled.h3`
  margin: 0;
`

const ProductInfoArticle = styled.article `
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin: 20px;
    padding: 20px;
    border: 1px solid #ccc;
`;

const ProductTitle = styled.div`
    grid-column: span 3;
    color: darkslategray;
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 10px;
`;

const ProductImageContainer = styled.div`
    grid-column: span 1;
`;

const ProductImage = styled.img`
    max-width: 100%;
    height: auto;
`;

const ProductInfoDetails = styled.div`
    grid-column: span 1;
`;

const ProductInfoList = styled.ul`
    list-style-type: disc;
    padding-left: 20px;
`;

const ProductInfoListItem = styled.li`
    margin-bottom: 5px;
`;

const ProductInfoFinance = styled.div`
    grid-column: span 1;
`;

const ProductInfoFinancePrice = styled.div`
    font-weight: bold;
    font-size: 1.2rem;
    margin-bottom: 10px;
`;

const ProductInfoStock = styled.div`
    margin-bottom: 10px;
`;

const ProductInfoStockLabel = styled.div`
    margin-bottom: 5px;
`;

const ProductInfoAction = styled.div`
    display: flex;
    justify-content: flex-start;
`;

const ProductInfoActionButton = styled.button`
    padding: 10px 20px;
    font-size: 1rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
`;

const ProductDescription = styled.div`
    grid-column: span 3;
    margin-top: 20px;
`;