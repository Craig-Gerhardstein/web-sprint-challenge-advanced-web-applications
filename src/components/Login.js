import React, { useEffect, useState } from "react";
import axios from "axios";

const Login = () => {

  const initialCreds = {
    username: "",
    password: "",
  }
  const [creds, setCreds] = useState(initialCreds)

  const handleChange = (e) => {
    setCreds({...creds, [e.target.name]: e.target.value})
  }

  const login = (e) => {
    e.preventDefault()
    if (!e.target.username || !e.target.password) {
      alert("Please enter valid username and password")
    } else { 
      axios.post("http://localhost:5000/api/login", creds)
           .then((res) => {
             localStorage.setItem("token", res.data.payload)
             window.location.href = '/protected'
           })
           .catch((err) => {console.log('LOGIN ERROR: ' + err)})
    }
  }

return (
  <div>

    <h1>Welcome to the Bubble App!</h1>

    <form onSubmit={login}>
      <h2>Login</h2>
      <label>
        User Name: 
        <input 
          type='text'
          placeholder='User Name'
          name='username'
          value={creds.username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Password: 
        <input 
          type='password'
          placeholder='password'
          name='password'
          value={creds.password}
          onChange={handleChange}
        />
      </label>

      <button type='submit'>Log In</button>

    </form>

  </div>
)
}

export default Login;