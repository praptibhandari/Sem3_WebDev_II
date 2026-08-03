import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductList = () => {
  const navigate = useNavigate()

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

  function goToProduct(id) {
    navigate(`/p/${id}`)
  }

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id} onClick={() => goToProduct(product.id)}>
            {product.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductList

