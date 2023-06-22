import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function ProductView() {
  const {id} = useParams()
  const [product,setProduct] = useState({})
  const products = useSelector((state) => state)

  let fetchProductInfo = async () => {
    try {
      // const productInfo = await axios.get(`https://6461c1c2491f9402f4aa0565.mockapi.io/products/${id}`)
      setProduct(products.find(obj => obj.id === id))
    } catch (error) {
      alert("Something went wrong")
    }
  }

  useEffect(() => {
    fetchProductInfo()
  }, [])
  

  return (
    <div className='container text-center'>
      <img src={product.imageLink}/>
      <h1>{product.title}</h1>
      <h2>${product.price}</h2>
      <p>{product.description}</p>
    
    </div>
  )
}

export default ProductView