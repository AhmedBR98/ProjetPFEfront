
import React from "react";
import PropTypes from "prop-types";
import Topbar from "./topbar";
import { Label , Input , FormGroup, Button , ButtonGroup } from 'reactstrap';
import { Paper} from '@material-ui/core';
import axios from 'axios';

import "./lost.css";
import { Link } from "react-router-dom";

 function  Lost () {
  const loginbutton={backgroundColor:'#474747',width:250, margin:20,height:35}
  const paperstyle={padding:20 , height: '85vh' , width: 400 , margin:'20px auto'}

  const [selectedFile, setSelectedFile] = React.useState(null);
  const [description,setDescription]=React.useState('');
  const [title,setTitle]=React.useState('');
   const handleSubmit = async  (event) => {
    event.preventDefault()
    const formData = new FormData();
    formData.append("selectedFile", selectedFile);
    formData.append('description',description);
    formData.append('title',title);
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:8000/lost/lost",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch(error) {
      console.log(error)
    }
  }
  var email=localStorage.getItem('email')
  var type=localStorage.getItem('type')
if(!type){
  window.location.href = '/login'
}

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0])
  }

    return (
        <>
      <Topbar/>
      <Paper elevation={10} style={paperstyle}>
    <div>
    <form onSubmit={handleSubmit}>
    <Label for="exampleText">
      Title : 
    </Label>
    <Input
      id="exampleText"
      name="text"
      type="text"
      onChange={(event)=>setTitle(event.target.value)}
    />
    <Label for="exampleText">
      Description : 
    </Label>
    <Input
      id="exampleText"
      name="text"
      type="textarea"
      onChange={(event)=>setDescription(event.target.value)}
    />
        <Label for="exampleFile">
      Image : 
    </Label>
      <Input
      id="exampleFile"
      name="file"
      type="file"
      onChange={handleFileSelect}
    />
    <input type="submit" value="Post" style={loginbutton} />
    </form>
    <Link to={'/found'}>Check posts</Link>
    </div>
    </Paper>
</>
    ); 
    }




export default Lost;
          