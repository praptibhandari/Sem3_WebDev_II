import { useState } from "react";

function Login() {

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const loginUser = async () => {

      console.log("LOGIN CLICKED");

      try {

         const response = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
               "Content-Type": "application/json"
            },
            body: JSON.stringify({
               email: email,
               password: password
            })
         });

         const data = await response.json();

         console.log("BACKEND RESPONSE:", data);

         if (data.token) {
            localStorage.setItem("token", data.token);
            alert("Login successful!");
         } else {
            alert(data.message || "Login failed");
         }

      } catch (error) {
         console.log("ERROR:", error);
      }
   };


   const getUser = async () => {

      console.log("USER BUTTON CLICKED");

      const token = localStorage.getItem("token");

      console.log("TOKEN:", token);

      if (!token) {
         alert("First login!");
         return;
      }

      try {

         const response = await fetch("http://localhost:3000/user", {
            method: "GET",
            headers: {
               Authorization: `Bearer ${token}`
            }
         });

         const data = await response.text();

         console.log("USER RESPONSE:", data);

         alert(data);

      } catch (error) {
         console.log("ERROR:", error);
      }
   };


   return (
      <div>

         <h1>Login</h1>

         <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
         />

         <br />

         <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
         />

         <br />

         <button onClick={loginUser}>
            Login
         </button>

         <button onClick={getUser}>
            Access User
         </button>

      </div>
   );
}

export default Login;