import React ,{useEffect, useState} from 'react';
import axios from 'axios';
import FlightCard from "./FlightCard"

const FlightDetails = ()=> {

  const [flightsList,setFlightsList] = useState([])

useEffect(()=>{
  axios.get("http://localhost:5000/flight").then(res =>{
    setFlightsList(res.data)
    console.log(flightsList)
    console.log(res.data)

  }).catch(err => {
    console.log(err)
  })
},
[]
)

  return (
  <div>
    
      {flightsList.map(flight => {
        return <FlightCard flight={flight } key={flight._id}  />
      })}

  </div>
)
}

export default FlightDetails;