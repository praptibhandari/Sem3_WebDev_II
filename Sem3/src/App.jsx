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


// import React from 'react'
// import Game from './Class4/lab.jsx'

// const App = () => {
//   return (
//     <div>
//       <Game />
//     </div>
//   )
// }

// export default App

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


// import React from 'react'
// import BackFront from "./BackFront.jsx"
// const App = () => {
//   return (
//     <div>
//       <BackFront/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Login from "./Frontend/Login.jsx"
// const App = () => {
//   return (
//     <div>
//       <Login/>
//     </div>
//   )
// }

// export default App

// import { useState } from "react";
// import Login from "./Frontend/Login";
// import Signup from "./Frontend/Signp";
// import Home from "./Frontend/Home.jsx";

// function App() {
//   const [page, setPage] = useState("login");

//   return (
//     <div>
//       {page === "login" && (
//         <Login setPage={setPage} />
//       )}

//       {page === "signup" && (
//         <Signup setPage={setPage} />
//       )}

//       {page === "home" && (
//         <Home setPage={setPage} />
//       )}
//     </div>
//   );
// }

// export default App;

import { useState } from "react";


function App() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email
            })
        });

        const data = await response.json();
        setMessage(data.message);
    };

    return (
        <div>

            <h1>User Form</h1>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <br /><br />

                <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <br /><br />

                <button type="submit">
                    Submit
                </button>

            </form>

            <h3>{message}</h3>

        </div>
    );
}

export default App;