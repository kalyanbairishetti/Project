import React from "react"
import { Link } from "react-router-dom"
import './style.css'
export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <h3>AIR GOO</h3>
      </Link>
      <ul>
      <li> <Link to="/">Home</Link></li>
      <li> <Link to="/FlightDetails">FlightDetails</Link></li>
       <li> <Link to="/Contactus">Contactus</Link></li>
       <li> <Link to="/About">About</Link></li>
    
      </ul>
    </nav>
  )
}




