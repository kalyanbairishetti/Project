import React from 'react';
import Card from 'react-bootstrap/Card';

import ListGroup from 'react-bootstrap/ListGroup';

export default function buttons({deleteFlight,editFlight,data}) {
    return (
     
  <div >
    <Card style={{ width: '18rem',marginTop:"50px", position:"flex", float:"left" }}>
      <Card.Img variant="top" src={require("../components/images/flight.gif")}></Card.Img>
      <Card.Body>
        <Card.Title>{data.flightName}</Card.Title>
     </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item style={{ textAlign:"left"}}>Flight ID:  {data.flightName}</ListGroup.Item>
        <ListGroup.Item style={{ textAlign:"left"}}>Seating Capacity:{data.seatingCapacity}</ListGroup.Item>
        <ListGroup.Item style={{ textAlign:"left"}}>fuel Capacity:{data.fuelCapacity }</ListGroup.Item>
        <ListGroup.Item style={{ textAlign:"left"}}>Trips:{data.trips}</ListGroup.Item>
        <ListGroup.Item style={{ textAlign:"left"}}>Stoppages:{data.stoppages}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <button style={{ width:"100px", marginRight:"15px"}} onClick={() => editFlight(data._id)}>EDIT</button>
        <button  style={{ width:"100px", background:"red"}} onClick={()=> deleteFlight(data._id)}>DELETE</button>
      </Card.Body>
    </Card>
          
    </div>     
  
          
         
    
    )
  }
