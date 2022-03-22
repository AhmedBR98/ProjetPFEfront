import React, {Component} from 'react'
import { Grid, Paper,Box,Button,Link} from '@material-ui/core';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import './Login.css'
import Divider from '@mui/material/Divider';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import './Login'




const largeIcon={height:45,width:45 }
const paperstyle={padding:20 , height: '70vh' , width: 400 , margin:'20px auto'}
const xlargeIcon={width:70 , height: 70 , margin:30}
const largebutton={width:250, margin:20 , borderradius:20}

export default class Pwrecovery extends Component {
    render() {


    return(
        <Grid align='center'>

            <Paper elevation={10} style={paperstyle}>
                <Box>   <h2>Forgot Password ?</h2></Box>
                <LockOutlinedIcon style={xlargeIcon}/>

                <Box sx={{display:'center' , alignitems: 'center'}}>
                <a>Choose a Method to recover your password</a>

<Button variant='outlined' style={largebutton} ><MailOutlineIcon style={largeIcon}/>&ensp;
Via email</Button>


 <Divider>OR</Divider>


<Button variant='outlined' style={largebutton}><PhoneIphoneIcon style={largeIcon}/>&ensp;
Via Phone Number</Button>


</Box>
         
<Box>
          <Link to="/Login" href="/Login" variant="body2">
                  Go Back to Login Screen
                </Link>
                </Box> 
            </Paper>
        


        </Grid>

 );
}  }