import React , {useState} from 'react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
    useParams
  } from "react-router-dom";
  import { Grid, Paper} from '@material-ui/core';
import { Label , Input , FormGroup, Button , ButtonGroup } from 'reactstrap';

function Salles () {
  const registerbutton={backgroundColor:'#474747',width:250, margin:10,height:40}
  const paperstyle={padding:20 , height: '85vh' , width: 400 , margin:'20px auto'}
  const [reservationName , setreservationName] = useState('')
  const [clientID , setclientID] = useState('')
  const [salleId , setsalleId] = useState('')
  const [guestNb , setguestNb] = useState(1)
//  const [totalPrice , settotalPrice] = useState(0)
  const [client , setclient] = useState('');
  const [time , settime] = useState()
  const [price,setPrice]=React.useState(10);
  const [dateStart, setdateStart] = React.useState(new Date());
  const [timeStart, settimeStart] = React.useState(null);
  const [type, setType] = React.useState('');
  const handleChange = (event) => {
    setType(event.target.value);}
 if (client === 'Pro') {
  var totalPrice= guestNb*5*time;
  var minTime = 1;

 }
 else {
   var totalPrice= guestNb*2.5*time;
   var minTime = 2 ;
  
 }

 totalPrice.toString()

 totalPrice = totalPrice + ' Dt'

async function Reserve(event) {
  event.preventDefault()
    // let { id } = useParams();


    const response = await fetch('http://localhost:8000/reservation/reservation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        reservationName,
        client,
        // salleId,
        guestNb,
        totalPrice,
        dateStart,
        time,
        timeStart,
      }),
    })

    const data = await response.json();
    if (data.status === 'ok') {
     console.log('good')
     }
    // setPrice(data.priceHour);

    }
    return (
        <>
         <Paper elevation={10} style={paperstyle}>
        <form onSubmit={Reserve}>
          <div>
          <h5>
    Reservation
  </h5>
    <Button
    value={'Pro'}
      color="dark"
      onClick={(e) => setclient(e.target.value)}
    >
      Pro
    </Button>
    <Button
    value={'Student'}
      color="dark"
      onClick={(e) => setclient(e.target.value)}
    >
      Student
    </Button>
  </div>
  <Label for="exampleTime">
      Reservation Name
    </Label>
    <Input
      id="exampleTime"
      name="Reservation Name"
      placeholder="Name placeholder"
      
      value={reservationName}
      onChange={(e) => setreservationName(e.target.value)}
    />
        <Label for="exampleDate">
      Date
    </Label>
    <Input
      id="exampleDate"
      name="date"
      placeholder="date placeholder"
      type="date"
      value={dateStart}
      onChange={(e) => setdateStart(e.target.value)}
    />

<Label for="exampleTime">
      Time Start
    </Label>
    <Input
      id="exampleTime"
      name="time"
      placeholder="time placeholder"
      type="time"
      value={timeStart}
      onChange={(e) => settimeStart(e.target.value)}
    />
{/* <LocalizationProvider dateAdapter={AdapterDateFns}>
  <TimePicker
    label="Pick Time"
    value={timeStart}
    onChange={(newValue) => {
      settimeStart(newValue);
    }}
    renderInput={(params) => <TextField {...params} />}
  />
</LocalizationProvider> */}


        {/* <FormGroup> */}
  <Label>
      Time
    </Label>
    <Input
      id="Time" value={time}
      name="number"
      placeholder="number placeholder"
     type="number" onChange={(e) => settime(e.target.value)}
     min={minTime}
    />
 

 <Label>
      Number of Guests
    </Label>
    <Input
      id="exampleNumber" value={guestNb} 
      name="number"
      placeholder="number placeholder"
     type="number" onChange={(e) => setguestNb(e.target.value)}
     min="1"
    />
<p>Price</p>
<Input
      id="exampleNumber" value={totalPrice} 
      name="number"
      placeholder="number placeholder"
    //  type="number" 
     disabled
    ><p>dt</p></Input>



<input type='submit' value='Reserve' style={registerbutton}  variant="contained" />
</form>
</Paper>
            </>
    ); 
}


export default Salles;