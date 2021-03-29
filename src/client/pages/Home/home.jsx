import React from "react";
import {
  NavLink,
} from "react-router-dom";
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h2>home</h2>
      <NavLink to="/about">about</NavLink>
    </div>
  )
}
export default Home;