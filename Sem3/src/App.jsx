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




// import React from 'react'
// import Todo from './Class4/Todo' 
// const App = () => {
//   return (
//     <div>
//       <Todo/>
//     </div>
//   )
// }

// export default App




// import React from 'react'
// import Zepto from './Class7/Zepto.jsx'
// const App = () => {
//   return (
//     <div>
//       <Zepto/>
//     </div>
//   )
// }

// export default App


import React from 'react'
import Game from './Class4/lab.jsx'

const App = () => {
  return (
    <div>
      <Game />
    </div>
  )
}

export default App

// import React from 'react'
// import { useState } from 'react'
// import { useEffect } from 'react'
// import axios from 'axios'
// const App = () => {
//   let [apiData, setApiData] = useState([])
//   useEffect(()=>{

//    async function api(){
//     let res = await axios.get("http://localhost:4000/")
//     console.log(res.data)
//     }
//     api()
//     // fetch("http://localhost:4000/")
    
//     // .then((res)=>{
//     //   return res.json()
//     // })

//     // .then((data)=>{
//     //   console.log(data);
//     // })


//   },[])
//   return (
//     <div>App</div>
//   )
// }

// export default App