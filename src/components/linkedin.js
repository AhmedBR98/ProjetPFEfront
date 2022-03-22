import React , {Component , useEffect} from "react";
import * as queryString from 'query-string';
import axios from 'axios';
import jwt from 'jwt-decode'

function Loginlinkedin() {
  const code = queryString.parse(window.location.search).code;
  const state= queryString.parse(window.location.search).state;
  const lnlog = async (code , state) => {
    


  



    
    const response = await fetch('http://localhost:8000/user/details', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        code:code,
        state:state,
        }),
      })
  
      const data2 = await response.json();
      console.log(data2)
    if (data2.user) {
      var user=jwt(data2.user)
      localStorage.setItem('email',user.email)
      localStorage.setItem('type',user.type)
      alert('Login successful')
      window.location.href = '/Home'
    
     }
     else {
      console.log(data2);
    }
     };
     useEffect  (() => lnlog(code) , [])
return(
<>
</>
);
  }
export default Loginlinkedin