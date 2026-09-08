import { useState } from "react";

function Login({ setPage }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    let response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    });

    let data = await response.json();

    console.log(data);

    if (data.token) {

      // Store JWT
      localStorage.setItem("token", data.token);

      alert("Login successful!");

      setPage("home");

    } else {
      alert(data);
    }
  };

  return (
    <div>

      <h1>Login</h1>

      <form onSubmit={handleLogin}>

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

        <button type="submit">
          Login
        </button>

      </form>

      <p>
        Don't have an account?

        <button onClick={() => setPage("signup")}>
          Signup
        </button>
      </p>

    </div>
  );
}

export default Login;