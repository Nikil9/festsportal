import React, { useState } from 'react';
import './App.css';
import Select from 'react-select';
import {Link, useHistory } from "react-router-dom";
import axios from 'axios';

//About Component
function Publish() {
  const history = useHistory();
  //fest id
  const [name, setName] = useState('');
  const [desc, setDesc] = useState();
  const [loc, setLoc] = useState('');
  const [time, setTime] = useState('');
  const [organizer, setOrganizer] = useState('');
  const [date, setDate] = useState('');
  const [phone, setPhone] = useState('');
  const [fee, setFee] = useState('');


    const handleNameChange = (e) => {
      setName(e.target.value);
    }

    const handleDescChange = (e) => {
      setDesc(e.target.value);
    }
    const handleLocChange=(e) => {
      setLoc(e.target.value);
    }

    const handleTimeChange=(e) => {
      setTime(e.target.value);
    }
  
    const handleOrganizerChange=(e) => {
      setOrganizer(e.target.value);
    }

    const handleDateChange=(e) => {
      setDate(e.target.value);
    }
  
    const handlePhoneChange = (e) => {
      setPhone(e.target.value);
    }

    const handleFeeChange = (e) => {
      setFee(e.target.value);
    }

    function getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    const handleSubmit = (e) => {
      e.preventDefault();
      axios.put("http://localhost:8080/publishEvent", {
       // registrationId:1234,
        eventId: getRndInteger(1,1000000),
        eventName: name,
        eventDescription: desc,
        eventLocation: loc,
        time: time,
        eventOrganiser: organizer,
        date:date,
        phone: phone,
        fees: fee,
      })
      .then((res) => {
          console.log(res.data);
          alert("Fest Published successfully!");
          history.push({
            pathname: '/home',
            state: { type: 'admin'}
          })
      })
      .catch((err) => {
          alert("Error while publishing fest, please try again!");
          console.log(err);
      });
    }

  return (
    <div className="app">
      <header >  
        <center>
          <h2>Publish a new Fest</h2>
           Fest Name:<br/>
          <input type="text" value={name} required onChange={(e)=> { handleNameChange(e) }} /><br />
          Fest Description:<br/>
          <input type="text" value={desc} required onChange={(e)=> { handleDescChange(e) }} /><br />
          Location:<br/>
          <input type="text" value={loc} required onChange={(e)=> { handleLocChange(e) }} /><br />
          Date:<br/>
          <input type="text" value={date} required onChange={(e)=> { handleDateChange(e) }} /><br />
          
          Time:<br/>
          <input type="text" value={time} required onChange={(e)=> { handleTimeChange(e) }} /><br />
          
         <br/>
        Organizer:<br/>
          <input type="text" value={organizer} required onChange={(e)=> { handleOrganizerChange(e) }} /><br />
          Contact:<br/>
          <input type="text" value={phone} required onChange={(e)=> { handlePhoneChange(e) }} /><br />
          Entry fee:<br/>
          <input type="text" value={fee} required onChange={(e)=> { handleFeeChange(e) }} /><br />
         <br/>
         <br/> <input type="submit" value="Publish fest" onClick={handleSubmit} />
          <br/>  
      
        </center>
      </header>
    </div>
  );
}
export default Publish;