import { useEffect, useState } from "react";

function Home({ setPage }) {

  const [user, setUser] = useState(null);

  useEffect(() => {

    const getUser = async () => {

      const token = localStorage.getItem("token");

      let response = await fetch(
        "http://localhost:3000/me",
        {
          headers: {
            Authorization: token
          }
        }
      );

      let data = await response.json();

      console.log(data);

      setUser(data);
    };

    getUser();

  }, []);

  const logout = () => {

    localStorage.removeItem("token");

    setPage("login");
  };

  if (!user) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>

      <h1>Welcome {user.name} 👋</h1>

      <h3>Email: {user.email}</h3>

      <h3>Role: {user.role}</h3>

      <button onClick={logout}>
        Logout
      </button>

    </div>
  );
}

export default Home;