import React, {useState} from 'react'
import { Grid, Paper, TextField,Box,InputAdornment,Button, Link } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useNavigate } from 'react-router-dom';
import FormLabel from '@mui/material/FormLabel';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

import './Login.css'
function Register() {
    const paperstyle={padding:20, height: '90vh' , width: 400 , margin:'20px auto'}
    const largeIcon={height:30,width:30}
    const pwIcon={height:25,width:25}
    const inputfield={width:260, padding:10, margin:8}
    const phoneinputfield={width:260, padding:10, margin:8}
    const namefield={width:115, padding:4, margin:8}
    const registerbutton={backgroundColor:'#474747',width:250, margin:10,height:40}
    const [value, setValue] = React.useState(new Date());
    const [fname , setfname] = useState('')
    const [lname , setlname] = useState('')
    const [email , setemail] = useState('')
    const [pnumber , setpnumber] = useState('')
    const [gender , setgender] = useState('female')
    const [password,setpassword] = useState('')
    const [cpassword,setcpassword] = useState('')
    
    const navigate = useNavigate();

    async function registerUser(event) {
      
      event.preventDefault()
  
      const response = await fetch('http://localhost:8000/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fname,
          lname,
          email,
          pnumber,
          password,
          value,
          gender,
        }),
      })
  
      const data = await response.json()
      if (password != cpassword) {
        data.status='err';
        alert('Password does not match')
      }
  
       if (data.status === 'ok') {
        navigate('/Login');
       }
       console.log(data.status)
    }
    return(
      
        <Grid align='center'>

            <Paper elevation={14} style={paperstyle}>
             
          <h2>Sign up</h2>
          <form onSubmit={registerUser}>
          <TextField style={namefield} id="input-with-icon-textfield"
            id="demo-helper-text-aligned"
            label="First Name" value={fname} onChange={(e) => setfname(e.target.value)}
            
          />
          <TextField style={namefield} id="input-with-icon-textfield"
           
           id="demo-helper-text-aligned-no-helper"
           label="Last Name" value={lname} onChange={(e) => setlname(e.target.value)}
          />
          <Box sx={{display:'center' , alignitems: 'center'}}>

            <TextField style={inputfield} type="email" id="input-with-icon-textfield" 
                 InputProps={{   style: { fontSize: 15 } , startAdornment: (<InputAdornment position="start"> 
                 < MailOutlineRoundedIcon style={largeIcon}/>
            </InputAdornment> ),        }}
           variant="standard" placeholder='Enter your email ' value={email} onChange={(e) => setemail(e.target.value)}/>
            </Box>

           <Box sx={{display:'center' , alignitems: 'center'}}>



            <TextField style={inputfield} id="input-with-icon-textfield"
             InputProps={{ style: { fontSize: 15 } ,   startAdornment: 
             (<InputAdornment position="start"> 
                <PhoneIphoneOutlinedIcon style={largeIcon}/>   
           
              </InputAdornment> ),        }}
 
  variant="standard" placeholder='Enter your Phone number here' value={pnumber} onChange={(e) => setpnumber(e.target.value)} />
 
 </Box>

            <Box sx={{display:'center' , alignitems: 'center'}}>
 
            <TextField style={inputfield} type='password' name="password" id="input-with-icon-textfield" 
                 InputProps={{ style: { fontSize: 15 } ,   startAdornment: (
            <InputAdornment position="start">
            <LockOutlinedIcon style={pwIcon}/>
            </InputAdornment> ),        }}
             variant="standard" placeholder='Enter your password here' value={password} onChange={(e) => setpassword(e.target.value)} />
            
            </Box>
 <Box sx={{display:'center' , alignitems: 'center'}}>
 <TextField style={inputfield} type='password' id="input-with-icon-textfield" 
      InputProps={{ style: { fontSize: 15 } ,   startAdornment: (
 <InputAdornment position="start">
 <LockOutlinedIcon style={pwIcon}/>
 </InputAdornment> ),        }}
  variant="standard" placeholder='Confirm your password here' value={cpassword} onChange={(e) => setcpassword(e.target.value)} />
             
 </Box>
 
 <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Enter your Birth date"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>

    <FormControl>
        <Box sx={{padding : 10}}>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      </Box>
      <RadioGroup
        row
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female" onChange={(e) => setgender(e.target.value)}
        name="radio-buttons-group"
      >
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
    


         
          <input type='submit' value='Register' style={registerbutton}  />
      </form>
          <Box>Already have an account ? <Link  href="/Login">Login</Link></Box>
            </Paper>


        </Grid>

 );
}  
export default Register