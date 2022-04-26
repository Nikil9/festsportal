import React, { useState } from 'react';
import './App.css';
import Select from 'react-select';
import {Link, useHistory } from "react-router-dom";
import axios from 'axios';

//About Component
function FestReg() {
  const history = useHistory();
  //fest id
  const [name, setName] = useState('');
  const [Id, setId] = useState();
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
 

    const handleNameChange = (e) => {
      setName(e.target.value);
    }
    const handleIdChange = e => {
      setId(e.target.value);
    }
    
    const handlePhoneChange = (e) => {
      setPhone(e.target.value);
    }

    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      //console.log(history.eventId)
      axios.put("http://localhost:8080/registerToAnEvent", {
       // registrationId:1234,
        eventId:history.location.state.eventId,
        userId:Id,
        eventName:name,
        phone:phone,
        email:email,
      })
        .then((res) => {
          console.log(res.data);
          alert("Fest Registration successful!");
          history.push("/home")
        })
        .catch((err) => {
          alert("Error while registration, please try again!");
          console.log(err);
        });


    //   axios.post("/signup", {
    //     user_id:Id,
    //     name: name,
    //     password: password,
    //     type: selectedOption.label
    //   })
    //     .then((res) => {
    //       alert(res.data)
    //       setId('')
    //       setName('')
    //       setPassword('')
    //       setSelectedOption(null)
    //       history.push("/")
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
        // alert("Registration successful");
        // history.push("/home");
    }

  return (
    <div className="app">
      <header >  
        <center>
          <h2>Fest Registration</h2>
           Name:<br/>
          <input type="text" value={name} required onChange={(e)=> { handleNameChange(e) }} /><br />
          student Id:<br/>
          <input type="text" value={history.location.state.userId} required onChange={(e)=> { handleIdChange(e) }} /><br />
          Phone:<br/>
          <input type="text" value={phone} required onChange={(e)=> { handlePhoneChange(e) }} /><br />
          Email:<br/>
          <input type="text" value={email} required onChange={(e)=> { handleEmailChange(e) }} /><br />
          <input type="submit" value="Submit" onClick={handleSubmit} />
          <br/>  
      
        </center>
      </header>
    </div>
  );
}
export default FestReg;