import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDisplay = () => {
  const { id } = useParams()

  const products = [
    {
      id: 1,
      name: 'iPhone 16',
      price: 80000,
    },
    {
      id: 2,
      name: 'Samsung S26',
      price: 70000,
    },
    {
      id: 3,
      name: 'OnePlus 14',
      price: 50000,
    },
  ]

  const product = products.find((p) => p.id === Number(id))

  return (
    <div>
      {product ? (
        <>
          <h2>{product.name}</h2>
          <p>Price: ₹{product.price}</p>
        </>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  )
}

export default ProductDisplay

