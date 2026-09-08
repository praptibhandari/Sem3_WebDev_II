import { useState } from "react";

function Signup({ setPage }) {

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user"
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    let response = await fetch("http://localhost:3000/signUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    let data = await response.text();

    alert(data);

    if (data === "done.......") {
      setPage("login");
    }
  };

  return (
    <div>
      <h1>Signup</h1>

      <form onSubmit={handleSignup}>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />

        <br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <br />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />

        <br />

        <select
          name="role"
          value={form.role}
          onChange={handleChange}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        <br />

        <button type="submit">
          Signup
        </button>

      </form>

      <p>
        Already have an account?
        <button onClick={() => setPage("login")}>
          Login
        </button>
      </p>

    </div>
  );
}

export default Signup;