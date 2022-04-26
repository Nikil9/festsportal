import React, { useState,useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import {Card,CardGroup} from 'react-bootstrap';
import './App.css';
import App from './App'
import  './Home';
import Popup from './Popup';
import axios from 'axios';
import { Button } from 'bootstrap';
 import background from './images/p2.jpg';
import { render } from '@testing-library/react';

function Home() {
  const [event, setEvent] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(false);


  const history = useHistory();

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  const register = (e) => {
    setEvent(e.target.value);
    //history.push("/register")
    console.log(e.target.value)
    history.push({
      pathname: '/register',
      state: { eventId: e.target.value,}
     // userId: history.location.state.userId }
    })
  }
  const handleTicket = (e) => {
    history.push({pathname: '/ticket'})
//      state: { userId: history.location.state.userId }
  
  }

  const deleteFest=(e)=>{
    var id = parseInt(e.target.value,10) 
    axios.post('http://localhost:8080/deleteEvent',null,{ params:{eventId:id} })
    .then(res => {
      if(res.data){
        alert('Deleted Fest')
      }
    })
    .catch(error => console.log(error))
    axios.get('http://localhost:8080/getAllEvents')
    .then(res => {
      if(res.data){
        setData(res.data);
      }
    })
    .catch(error => console.log(error))
  }

  useEffect(() => {
  axios.get('http://localhost:8080/getAllEvents')
    .then(res => {
      if(res.data){
        setData(res.data);
      }
    })
    .catch(error => console.log(error))
  },[])
    
    return ( 
    history.location.state.type=='student'?
    (<div style={{backgroundImage: `url(${background})`}}> 
      {/* <Link to="/home">Home</Link>
      <Link to="/about">About</Link> */}
    <ul style={{background:'#0F1111'}}>
    

    <li style={{float:'left' }}><a><strong>FESTS</strong></a></li>
    <li style={{float:'right'}}><a href="/">Logout</a></li>
    {/* <li style={{float:'right'}}><a href="ticket">My Tickets</a></li> */}
    <li style={{float:'right'}}><a style={{color:'aliceblue',paddingTop:'14px',textDecoration:'underline',cursor:'pointer'}} onClick={handleTicket}>My Tickets</a></li>
    <li style={{float:'right'}}><a class="active" href="home">Events Home</a></li>
    <li style={{float:'right'}}><a href="about">About us</a></li>
    </ul>
    <h2><center>University Fest Portal</center></h2>

    {/* <Card>
    <Card.Header>Featured</Card.Header>
    <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary" onClick={(e) => { register(e) }}>Register</Button>
    </Card.Body>
    </Card> */}
    

    {data&&data.map((item)=>{
      return(
     <div style={{paddingLeft:'200px', paddingRight:'200px'}}> 
        <div style={{background:'white'}} className="w3-panel w3-card-4">
          <h4>{item.eventName}</h4>
          <hr/>
          {item.eventDescription}<br/>
          <div>Event Location: {item.eventLocation}</div>
          <div>Date: {item.date}</div>
          <div style={{float:'right'}}>Event starts at: {item.time}</div>
          <div>Organizer: {item.eventOrganiser}</div>
          <div style={{float:'right', display:'inline'}}>contact: {item.phone}</div>
          <div>Entry Fee: {item.fees}</div>
          
          <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
          {/* <input type="submit" value="Register to this event" onClick={register} style={{float:'right', marginBottom:'10px', background:'#fbeee8' }} /> */}
          <button value={item.eventId} style={{float:'right', marginBottom:'10px',borderRadius:'40px',width:'100px',cursor:'pointer',background:'gold' }} onClick={register}>Register</button>
        </div>
      </div>
      )
    })
  }
  </div>)
  :
  <div>
    <div style={{backgroundImage: `url(${background})`}}> 
    <ul style={{background:'#0F1111'}}>
    <li style={{float:'left' }}><a><strong>FESTS</strong></a></li>
    <li style={{float:'right'}}><a href="/">Logout</a></li>
    {/* <li style={{float:'right'}}><a href="ticket">My Tickets</a></li> */}
    <li style={{float:'right'}}><a class="active" href="home">Events Home</a></li>
    <li style={{float:'right'}}><a href="/publish">Publish Event</a></li>
    </ul>
    <h2><center>University Fest Portal</center></h2>

    {data&&data.map((item)=>{
      return(
     <div style={{paddingLeft:'200px', paddingRight:'200px'}}> 
        <div style={{background:'white'}} className="w3-panel w3-card-4">
          <h4>{item.eventName}</h4>
          <hr/>
          {item.eventDescription}
          <div>Event Location: {item.eventLocation}</div>
          <div>Date: {item.date}</div>
          <div style={{float:'right', display:'inline'}}>Event starts at: {item.time}</div>
          <div>Organizer: {item.eventOrganiser}</div>
          <div style={{float:'right', display:'inline'}}>contact: {item.phone}</div>
          <div>Entry Fee: {item.fees}</div>
          
          <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
          {/* <input type="submit" value="Register to this event" onClick={register} style={{float:'right', marginBottom:'10px', background:'#fbeee8' }} /> */}
          <button value={item.eventId} style={{float:'right', marginBottom:'10px',borderRadius:'40px',width:'100px',cursor:'pointer',background:'gold' }} onClick={deleteFest}>Delete</button>
        </div>
      </div>
      )
    })
  }
  </div>


  </div>
  );
}

export default Home;