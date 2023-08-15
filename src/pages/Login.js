/*import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const handleSubmit = async(e) => {
    e.preventDefault();

    if (email && password) {
      // Here you can implement your login logic, such as sending the data to a server

      try {
        const response = await fetch('/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
        console.log("before");
        const data = await response.json();
        console.log("after");
        if (response.ok) {
          console.log("100");
          console.log(data.message);
          history.push('/');

          // Redirect to home page or perform other actions on successful login
        } else {
          console.log("1");
          console.error(data.message);
        }
      } catch (error) {
        console.log("2");
        console.error('An error occurred:', error);
      }



      //console.log('Login successful:', email);
    } else {
      alert('Please enter both email and password.');
    }
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5'
  };

  const formStyle = {
    width: '350px',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)'
  };

  const headerStyle = {
    fontSize: '24px',
    marginBottom: '20px'
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px'
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '4px',
    color: 'white',
    fontSize: '16px',
    padding: '10px',
    cursor: 'pointer',
    width: '100%'
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3'
  };

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <h2 style={headerStyle}>Login</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
              placeholder="Enter your email"
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" style={Object.assign({}, buttonStyle, buttonHoverStyle)}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;*/


import React, { useEffect, useState } from "react"
import axios from "axios"
import { useHistory, Link } from "react-router-dom"
import"./login.css"


function Login() {

    const history=useHistory();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    history("/home",{state:{id:email}})
                }
                else if(res.data=="notexist"){
                    alert("User have not sign up")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
        <div className="login">

            <h1>Login</h1>

            <form action="POST" id="form">
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter your email" ></input>  <br></br>
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Enter your Password"  ></input><br></br>
                 <input type="submit" onClick={submit} />

            </form>

            
            <p>OR</p>
           

            <Link to="/signup">Create account</Link>

        </div>
    )
}

export default Login
