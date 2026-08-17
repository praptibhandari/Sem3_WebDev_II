import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

const Home = ()=>{
  return <h2>Home Page</h2>
}

const About = ()=>{
  return <h2>About Page</h2>
}

const Contact =()=>{
  return <h2>Contact Us Page</h2>
}

const Services =()=>{
  return <h2>Services Page</h2>
}

const Ques_01 = () => {
  return (
    <BrowserRouter>

      <nav>
        <Link to="/" style={{ marginRight: "50px" }}>Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/services">Services</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>

    </BrowserRouter>
  )
}

export default Ques_01