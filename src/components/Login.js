import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom'
import axios from "axios";

const initialState = {
    username: '',
    password: '',
}

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [ formData, setFormData ] = useState(initialState);
  const [ error, setError ] = useState('')

  const history = useHistory();

  const handleChange = (e) => {
    setFormData(
      {...formData, [e.target.name]: e.target.value}
    )
  }

  const login = (e) => {
    e.preventDefault();
    e.preventDefault()
    if (!e.target.username || !e.target.password) {
      alert("Please enter valid username and password")
    } else{

      axios
      .post('http://localhost:5000/api/login', formData)
      .then(res => {
        localStorage.setItem('token', res.data.payload)
        history.push("/bubblepage");
      })
      .catch(err => {
        setError(`Error ${err.response.status}: ${err.response.data.error}`)
      })
    }

   
  }


  return (
    <>
      <form onSubmit={login}>
        <input name='username' type='text' value={formData.username} onChange={handleChange} placeholder="Username" />
        <input name='password' type='password' value={formData.password} onChange={handleChange} placeholder="Password" />
        <button>Log In</button>
      </form>
      {
        error ? <div>{error}</div> : null
      }
    </>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.