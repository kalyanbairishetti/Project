import React from 'react'
import "./Home.css";
import { Link } from 'react-router-dom';
// import Card from 'react-bootstrap/Card';
// import Carousel from 'react-bootstrap/Carousel';


const Home = () => {
  return (
    <div className="home">
    The journey of thousand miles begins with a single step and this time it is<Link to= "/admin">
    <button><h5 >"AIR GOO"</h5></button></Link>

    </div>
    
    
  )
}
export default Home;