import React, { useState,useEffect } from 'react'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './admin.css';
import axios from 'axios';
import "../admin/admin.css"
import Buttons from "../admin/buttons"

const Admin = () => {
  const[flight , setFlight] = useState({
    flightName:'',
    seatingCapacity:"",
    fuelCapacity:"",
    trips:"",
   stoppages:""
  });
  const [flights,setFlights] = useState([])
  const [isUpdate,setIsUpdate] = useState(false)

  useEffect(() => {
    getFlights()
  }, [])

  const getFlights = () =>{
    axios.get("http://localhost:5000/flight").then(res =>{
      setFlights(res.data)
    }).catch(err =>{
      console.log("Error while fetching flights");
    })
  }



   const create = ()=>{
    console.log(flight);
     axios.post('http://localhost:5000/flight',flight)
    setFlight({
     flightName:'',
    seatingCapacity:"",
    fuelCapacity:"",
    trips:"",
    stoppages:""
    })
  }
  getFlights()


  const editFlight = (id) =>{
    setIsUpdate(true)
    const currentFlight = flights.filter(data => data._id === id)[0];
    setFlight({
      _id : currentFlight._id,
     flightName:currentFlight.flightName,
      seatingCapacity:currentFlight.seatingCapacity,
      fuelCapacity:currentFlight.fuelCapacity,
      trips:currentFlight.trips,
      stoppages:currentFlight.stoppages
    })

  
   
 }

 const updateFlightCall = (id) =>{
    axios.put(`http://localhost:5000/flight/${id}`,flight).then(res =>{
      getFlights()
    }).catch(err => {
      console.log(err);
    })


    setFlight({
      flightName:'',
      seatingCapacity:'',
      fuelCapacity:'',
      trips:'',
      stoppages:''
      
    })
    setIsUpdate(false)

 }







  
  const deleteFlight = (id) => {
    axios.delete(`http://localhost:5000/flight/${id}`).then(res =>{
      console.log(res);

    }).catch(err =>{
      console.log("Unable to delete");
    })

    getFlights()

   }
 
  

  return (
    
      <Row className='row'>
        <Col className='box' xs={12} md={8} >
        {flights.length > 0 ? flights.map(data => {
           return <Buttons key={data._id} deleteFlight={deleteFlight} editFlight={editFlight} data={data}/> 
          }) : <h1>no flights </h1>}
        </Col>
        <Col  xs={6} md={4} >
        

        
    <Form className='form2'>
    {/* <span>Enter Details </span> */}
    {isUpdate ? (<h1>Update the flight </h1>):(
        <h1 style={{fontFamily:"sans-serif Arial Black", color:"darkblue" ,height:"50px", width: "320px", marginLeft:"-20px",borderRadius:"10px"}}>FLIGHT ENTRIES </h1> 
      )}
      <Form.Group className="form1 ">
        <Form.Control type="text" placeholder="Flight ID" value={flight.flightName} onChange={(event)=>{
          setFlight({...flight, flightName:event.target.value})}} />
      </Form.Group>


      <Form.Group className="form1">
        <Form.Control  type="text" placeholder="Seating Capacity" value={flight.seatingCapacity}  onChange={(event)=>{
          setFlight({...flight, seatingCapacity:event.target.value})}}/>
      </Form.Group>

      <Form.Group className=" form1">
        <Form.Control type="text" placeholder="Fuel Capacity(L)" value={flight.fuelCapacity}  onChange={(event)=>{
          setFlight({...flight,  fuelCapacity:event.target.value})}}/>
      </Form.Group>

      <Form.Group className="form1 ">
        <Form.Control type="text" placeholder="Trips" value={flight.trips}  onChange={(event)=>{
          setFlight({...flight,  trips:event.target.value})}}/>
      </Form.Group>

      <Form.Group  className="form1 ">
        <Form.Control  type="number" placeholder="Stoppages" value={flight.stoppages}  onChange={(event)=>{
          setFlight({...flight,  stoppages:event.target.value})}}/>
      </Form.Group>
      {isUpdate ? <Button className='btn' variant="success" onClick={() => updateFlightCall(flight._id)}>Update</Button> : (
      <Button style={{marginLeft:"-30px"}}className='btn' variant="primary" onClick={create} >
        CREATE
      </Button>
       )}
    </Form>
        </Col>
      </Row>
        
  )
}

export default Admin