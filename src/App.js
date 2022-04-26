import React, { useState } from 'react';
import './App.css';
import Select from 'react-select';
import { Link,useHistory } from "react-router-dom";
import axios from 'axios';



function App() {
  const history = useHistory();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);


  const data = [
    {
      value: 1,
      label: "student"
    },
    {
      value: 2,
      label: "admin"
    },]

  const handleChange = (e) => {
    setName(e.target.value);
  }
  const handleTypeChange = e => {
    setSelectedOption(e);
  }
  
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  }
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put("http://localhost:8080/saveUserDetails", {
      // 'userId':'12',
      'userName':name,
      'password':password,
      'email':email,
      'phoneNum':phone,
      'role':selectedOption.label
    })
      .then((res) => {
        console.log(res.data);
        alert("Registration successful!");
        history.push("/")
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
  return (
    <div className="App">
      <Link to="/" style={{position:'fixed',fontSize:16, right:10,color:'white'}}>Login</Link>
      <header className="App-header">  
        <form onSubmit={(e) => { handleSubmit(e) }}>
          <h2> Fest Portal</h2>
           <h6> Sign-up for the fests near you</h6>
            Name:
          <input type="text" value={name} required onChange={(e)=> { handleChange(e) }} /><br />
            Email:
          <input type="email" value={email} required onChange={(e) => { handleEmailChange(e) }} /><br />
          Password:
          <input type="password" value={password} required onChange={(e) => { handlePasswordChange(e) }} /><br />
          {/* Confirm Password:<br />
          <input type="password" value={confPassword} required onChange={(e) => { handleConfPasswordChange(e) }} /><br /> */}
          Phone:
          <input type="text" value={phone} required onChange={(e) => { handlePhoneChange(e) }} /><br />
          Type:
          <div style={{paddingLeft:'20px', width:'max-content',height:'100px',}}>
          <Select
          required="true"
          placeholder="Select Type"
          value={selectedOption} 
          options={data} 
          onChange={handleTypeChange} 
          /> </div>
          <input type="submit" value="Submit" />
          <br/>  
        </form>
      </header>
    </div>
  );
}

export default App;





// import React, { useState } from 'react';
// import './App.css';
// import Select from 'react-select';
// import {Link, useHistory } from "react-router-dom";
// import axios from 'axios';

// //About Component
// function FestReg() {
//   const history = useHistory();
//   const [name, setName] = useState('');
//   const [password, setPassword] = useState('');
//   const [Id, setId] = useState('');
//   const [selectedOption, setSelectedOption] = useState(null);

//   const data = [
//     {
//       value: 1,
//       label: "customer"
//     },
//     {
//       value: 2,
//       label: "hotel_owner"
//     },
//     {
//       value: 3,
//       label: "flight_vendor"
//     }]

//     const handleNameChange = (e) => {
//       setName(e.target.value);
//     }
//     const handleTypeChange = e => {
//       setSelectedOption(e);
//     }
    
//     const handleIdChange = (e) => {
//       setId(e.target.value);
//     }

//     const handlePasswordChange = (e) => {
//       setPassword(e.target.value);
//     }

//     const handleSubmit = (e) => {
//       e.preventDefault();
//     //   axios.post("/signup", {
//     //     user_id:Id,
//     //     name: name,
//     //     password: password,
//     //     type: selectedOption.label
//     //   })
//     //     .then((res) => {
//     //       alert(res.data)
//     //       setId('')
//     //       setName('')
//     //       setPassword('')
//     //       setSelectedOption(null)
//     //       history.push("/")
//     //     })
//     //     .catch((err) => {
//     //       console.log(err);
//     //     });

//         alert("Registration successful");
//         history.push("/home");

//     }

//   return (
//     <div className="app">
//       <Link to="/" style={{position:'fixed',fontSize:16, right:10,color:'black'}}>Login</Link>
//       <header >  
//         <center>

//           <h2> Travel Advisor</h2>
//           <h6> Sign-up to continue booking</h6>
//             Name:<br/>
//           <input type="text" value={name} required onChange={(e)=> { handleNameChange(e) }} /><br />
//            UserId:<br/>
//           <input type="text" value={Id} required onChange={(e) => { handleIdChange(e) }} /><br />
//           Password:<br/>
//           <input type="password" value={password} required onChange={(e) => { handlePasswordChange(e) }} /><br />
//           Type:<br/>
//           <div style={{paddingLeft:'0px', width:'max-content',height:'100px',}}>
//           <Select
//           required="true"
//           placeholder="Select Type"
//           value={selectedOption} 
//           options={data} 
//           onChange={handleTypeChange} 
//           /> </div>
//           <input type="submit" value="Submit" onClick={handleSubmit} />
//           <br/>  
      
//         </center>
//       </header>
//     </div>
//   );
// }
// export default FestReg;