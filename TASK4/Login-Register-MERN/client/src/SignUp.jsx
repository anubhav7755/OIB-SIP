import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function SignUp() {
    const [name,setName]= useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const nevigate =useNavigate();
    function handleSubmit(e){
        e.preventDefault();
       console.log(name,email,password);
       axios.post('http://localhost:3001/register',{name,email,password})
       .then(result=> {console.log(result)
        nevigate("/login");
       })
       .catch(err=> console.log(err))
    }
  return (
    <div>
    <form onSubmit={handleSubmit}>
<div class="form-group" >
<label for="name">Name:</label>
<input type="text" class="form-control" id="name" placeholder="Enter your name" onChange={(e)=>setName(e.target.value)}/>
</div>
<div class="form-group">
<label for="email">Email:</label>
<input type="email" class="form-control" id="email" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}/>
</div>
<div class="form-group">
<label for="password">Password:</label>
<input type="password" class="form-control" id="password" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)} />
</div>
<button type="submit" class="btn btn-primary">Sign up</button>
</form>
<Link to='/login'className='btn btn-secondary login'>Login</Link>
   </div>
  )
}

export default SignUp