import { Button, Paper, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState, } from 'react';
import {  useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(()=>{
    const auth=localStorage.getItem('user');
    if(auth){
      navigate('/')
    }
  })


  const collectData = async() => {
    console.log(name, email, password);
    let result = await fetch("http://localhost:8000/register", {
      method: 'post',
      body: JSON.stringify({ name, email, password }),
      headers: {
          'Content-Type': 'application/json'
      }
  });
  result = await result.json();
  // console.warn(result);
  localStorage.setItem("user",JSON.stringify(result.result));
  localStorage.setItem("token",JSON.stringify(result.auth));
  navigate('/');

 
  }

  return (
    <div className='signuppage'>
     <Paper sx={{padding:'32px' }} className='paper1' elevation={4}>
      <Stack sx={{ display:'flex',justifyContent:'center', alignItems:'center',height:"350px" ,width:'350px'}} direction='column' spacing={2}      >
        <Typography variant='h4'> SignUp</Typography>

        <TextField  size="small" fullWidth  label="Enter your name" variant="outlined" required 
        value={name} onChange={(e) => setName(e.target.value)}/>

        <TextField  size="small" fullWidth  label="Enter your email"  type="email" variant="outlined" required 
        value={email} onChange={(e) => setEmail(e.target.value)}/>

        <TextField  size="small" fullWidth label="Enter your password" type="password" variant="outlined" required helperText="do not share"
        value={password} onChange={(e) => setPassword(e.target.value)}/>

        <Button variant='contained' sx={{width:'120px'}}
        onClick={collectData} >SignUp</Button>
        </Stack>
     </Paper>

    </div>
  )
}

export default Signup
