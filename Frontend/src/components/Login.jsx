import { Button, Paper, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();

    useEffect(()=>{
      const auth =localStorage.getItem('user');
      if(auth){
        navigate("/")
      }
    })

    const handleLogin=async()=>{
      let result = await fetch("http://localhost:8000/login", {
        method: 'post',
        body: JSON.stringify({ email, password }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    result = await result.json();
    // console.warn(result)
     if (result.auth){
      localStorage.setItem("user",JSON.stringify(result.user));
      localStorage.setItem("token",JSON.stringify(result.auth));
      navigate('/')
     }else{
      alert("please provide valid data..")
     }
   }

  return (
   <div className='loginpage'>
     <Paper sx={{padding:'32px' }} className='paper' elevation={4}>
      <Stack sx={{ display:'flex',justifyContent:'center', alignItems:'center',height:"350px" ,width:'350px' }} direction='column' spacing={2}      >
        <Typography variant='h4' > LogIn</Typography>
        <TextField  size="small" fullWidth label="Enter your email"  type="email" variant="outlined" required
        onChange={(e) => setEmail(e.target.value)} value={email}/>

        <TextField  size="small" fullWidth label="Enter your password" type="password" variant="outlined" required helperText="do not share"
        onChange={(e) => setPassword(e.target.value)} value={password}/>

        <Button variant='contained'  sx={{width:'120px'}}
        onClick={handleLogin}>LogIn</Button>
        </Stack>
     </Paper>

    </div>
   
  )
}

export default Login
