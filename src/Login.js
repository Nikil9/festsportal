import React, { useState } from 'react';
import {Link, useHistory } from "react-router-dom";
import axios from 'axios';

import './App.css';
import Home from './Home';

function Login() {
  const history = useHistory();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  }
  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get('http://localhost:8080/getUserDetails',{ params: {userName:name, passWord:password } })
    .then(res => {
      if(!res.data.email){
        alert('Invalid username/ password')
        setName('');
        setPassword('');
      }
      else{ //history.push("/home")
      history.push({
        pathname: '/home',
        state: { userId: res.data.userId, type: res.data.role }
      })
    }
    })
    .catch(error => console.log(error))
}
  return (
    <div className="login">
        <center >
        <form onSubmit={(e) => { handleSubmit(e) }}>
          <h3> Login here</h3><br/><br/>
          <label >
           UserName:
          </label><br />
          <input type="text" value={name} required onChange={(e)=> { handleChange(e) }} /><br />
           <label>
            Password:
          </label><br />
          <input type="password" value={password} required onChange={(e) => { handlePasswordChange(e) }} />
         <br/><br/> <input type="submit" value="Submit" />
        </form>
        </center>
        <Link to="/signup" style={{ color:'white', fontSize:16}}> Don't hanve an account? sign up here</Link>
    </div>
  );}
export default Login;