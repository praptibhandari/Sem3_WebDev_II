// import React from 'react'
// import { Routes, Route } from 'react-router-dom'
// import NavBar from './Class3_navbar/NavBar'
// import Home from './Class3_navbar/Home'
// import About from './Class3_navbar/About'
// import ProductList from './Class3_navbar/ProductList'
// import ProductDisplay from './Class3_navbar/ProductDisplay'

// const App = () => {
//   return (
//     <div>
//       <NavBar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/products" element={<ProductList />} />
//         <Route path="/p/:id" element={<ProductDisplay />} />
//       </Routes>
//     </div>
//   )
// }

// export default App

import React from 'react'
import Todo from './Class4/Todo' 
const App = () => {
  return (
    <div>
      <Todo/>
    </div>
  )
}

export default App