import React , {Component , useEffect} from "react";
import FacebookLoginBtn from "react-facebook-login/dist/facebook-login-render-props";
import * as queryString from 'query-string';
import axios from 'axios';
import jwt from 'jwt-decode'
function Loginfacebook() {
  const code = queryString.parse(window.location.search).code;
  const fblog = async (code) => {
    var { data } = await axios({
      url: 'https://graph.facebook.com/v13.0/oauth/access_token',
      method: 'get',
      params: {
        client_id: 1711996752472987,
        client_secret: "082c569426018ff1e59a4c49884e5ffe",
        redirect_uri: 'http://localhost:3000/authenticate/facebook/',
        code,
      },
    });
    const access_token=data.access_token;
     data  = await axios({
      url: 'https://graph.facebook.com/me',
      method: 'get',
      params: {
        fields: ['id', 'email', 'first_name', 'last_name','birthday','gender'].join(','),
        access_token: access_token,
      },
    });
    console.log(data.data);

    const response = await fetch('http://localhost:8000/user/facebook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email:data.data.email,
          fname:data.data.first_name,
          lname:data.data.last_name,
          birthday:data.data.birthday,
          gender:data.data.gender
        }),
      })
  
      const data2 = await response.json()
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
     useEffect  (() => fblog(code) , [])
return(
<>
</>
);
  }
export default Loginfacebook