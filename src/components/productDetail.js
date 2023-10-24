import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../fetcher'

//fetch API - Get product by ID 
const ProductDetail = () => {
  const [product, setProduct] = React.useState({errorMessage: '', data: [] }) //state management
  const {productId} = useParams()

  React.useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getProductById(productId)
      setProduct(responseObject)
    }
    fetchData()
  }, [productId]) //data fetch

  return (
    <div>ProductDetail id:{productId} title:{product.data.title}</div> //rendered component
  )
}

export default ProductDetail