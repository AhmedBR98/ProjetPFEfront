import React , {useState} from 'react'
import { Grid, Paper, TextField,Box,InputAdornment,Button,Checkbox ,FormControlLabel,Link} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';
import Divider from '@mui/material/Divider';
import './Login.css'
import { ReactComponent as Google } from './assets/google.svg';
import { ReactComponent as Facebook } from './assets/facebook.svg';
import { ReactComponent as Linkedin } from './assets/linkedin.svg';
import {ReactComponent as Level1} from './assets/lvl1.svg';
import './PasswordRecovery'
import jwt from 'jwt-decode'
import * as queryString from 'query-string';

function Login () {
    const paperstyle={padding:20 , height: '85vh' , width: 400 , margin:'20px auto'}
    const largeIcon={height:30,width:30}
    const pwIcon={height:25,width:25}
    const inputfield={width:250, padding:10, margin:8}
    const loginbutton={backgroundColor:'#474747',width:250, margin:20,height:35}
    const imagesize={height:55 , width : 55 , margin: 10}
    const gsize={height:44 , width : 44 , margin: 10}
    const imagesizee={height:120 , width : 350 , margin: 10}
    const [email, setEmail] = useState('')
    const [pnumber, setpnumber] = useState('')
    const [password, setPassword] = useState('')


    const linklink = queryString.stringify({
      client_id: '78avrcsql0ehpx',
      redirect_uri: 'http://localhost:3000/authenticate/linkedin/',
      scope: ['r_liteprofile', 'r_emailaddress'].join(','), // comma seperated string
      response_type: 'code',
      // auth_type: 'rerequest',
      // display: 'popup',
    });
    const linkedLoginUrl = `https://www.linkedin.com/oauth/v2/authorization?${linklink}`;

    const stringifiedParams = queryString.stringify({
      client_id: 1711996752472987,
      redirect_uri: 'http://localhost:3000/authenticate/facebook/',
      scope: ['email', 'public_profile','user_gender','user_birthday'].join(','), // comma seperated string
      response_type: 'code',
      auth_type: 'rerequest',
      display: 'popup',
    });
    const facebookLoginUrl = `https://www.facebook.com/v4.0/dialog/oauth?${stringifiedParams}`;

  

    async function loginUser(event) {
      event.preventDefault()
  
      const response = await fetch('http://localhost:8000/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
  
      const data = await response.json()
  
      if (data.user) {
        var user=jwt(data.user)
        localStorage.setItem('email',user.email)
        localStorage.setItem('type',user.type)
        alert('Login successful')
        window.location.href = '/Home'
      
       }
       else {
        alert('Please check your username and password')
      }
    }
    return(
        <Grid align='center'>
<Level1 style={imagesizee}/>
            <Paper elevation={10} style={paperstyle}>
             
          <h2>Sign in</h2>
<form onSubmit={loginUser}>
          <Box sx={{display:'center' , alignitems: 'center'}}>

                 <TextField 					
                 value={email}
					       onChange={(e) => setEmail(e.target.value)}
                 style={inputfield} id="input-with-icon-textfield" label="Email or Phone Number" InputLabelProps={{ style: { fontSize: 20 } }}
                 InputProps={{   style: { fontSize: 15 } , startAdornment: (
            <InputAdornment position="start">
           <PersonOutlinedIcon style={largeIcon}/>
            </InputAdornment> ),        }}
        variant="standard" placeholder='Enter your email or phone number here' />

            </Box>

            <Box sx={{display:'center' , alignitems: 'center'}}>

            <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputfield} type='password' id="input-with-icon-textfield" label="Password" InputLabelProps={{ style: { fontSize: 20 } }}
            InputProps={{ style: { fontSize: 15 } ,   startAdornment: (
            <InputAdornment position="start">
           <LockOutlinedIcon style={pwIcon}/>
            </InputAdornment> ),        }}
        variant="standard" placeholder='Enter your password here' />
            
          </Box>
          <FormControlLabel control={<Checkbox color='#474747' />} label="Remember me" />
          <Box><Link to="/PasswordRecovery" href="/PasswordRecovery">Forgot Password ?</Link></Box>
          
          <Box sx={{display:'center' , alignitems: 'center'}}>
          <input type="submit" value="Login" style={loginbutton} />
          
          </Box>
          </form>
          <Divider><h4>OR</h4></Divider>
          <Box sx={{margin: 5}}>Sign in with :</Box>
          <Box sx={{ padding : 8}}>
            <Google style={gsize}/>
            <a href={facebookLoginUrl}> <Linkedin style={imagesize}/></a>
           <a href={linkedLoginUrl}> <Facebook style={imagesize}/> </a>
            </Box>
            <Box>Not registered yet ? <Link  href="/Register">Sign Up</Link></Box>
          

            </Paper>


        </Grid>

 );
}  
export default Login