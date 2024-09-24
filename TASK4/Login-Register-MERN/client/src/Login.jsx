import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Login() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const nevigate =useNavigate();
    function handleSubmit(e){
        e.preventDefault();
       console.log(email,password);
       axios.post('http://localhost:3001/login',{email,password})
       .then(result=> {
        console.log(result);
        if(result.data=="successful"){
        nevigate("/home");
        }
        else{
          alert("wrong email or password.");
        }
       })
       .catch(err=> console.log(err))
    }
  return (
    <div>
    <form onSubmit={handleSubmit}>
<div class="form-group">
<label for="email">Email:</label>
<input type="email" class="form-control" id="email" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}/>
</div>
<div class="form-group">
<label for="password">Password:</label>
<input type="password" class="form-control" id="password" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)} />
</div>
<button type="submit" class="btn btn-primary">Login</button>
</form>
<Link to='/register'className='btn btn-secondary login'>Sign Up</Link>
   </div>
  )
}

export default Login;