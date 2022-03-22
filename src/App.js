import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
// import {ReactComponent as Level1} from './components/assets/lvl1.svg';
import Login from "./components/Login";
import Pwrecovery from './components/PasswordRecovery';
import Register from './components/Register';
import Profile from './components/Profile';
import  HomePage  from './components/HomePage';
 import OwnProfile from './components/OwnProfile'
 import Chat from './components/chat';
 import Lost from './components/lost';
 import Reservation from './components/Card';
 import Facebook from './components/Facebook';
 import Salles from './components/salles';
 import Found from './components/found';
 import AdPostChange from './components/adminpostchange'
 import Admin from './components/admin';
 import AdPostConfirm from './components/adminpostconfirm';
 import Loginfacebook from './components/Facebook';
 import Loginlinkedin from './components/linkedin'


// const imagesize={height:120 , width : 350 , margin: 10}
function App() {
  return (
    <div className='App'>
      
{/* <Level1 style={imagesize}/> */}

        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/PasswordRecovery" element={<Pwrecovery />}></Route>
          <Route path='/Register' element={<Register/>}></Route>
          <Route path='/Profile' element={<OwnProfile/>}></Route>
          <Route path='/Home' element={<HomePage/>}></Route>
          <Route path='/chat' element={<Chat/>}></Route>
          <Route path='/lost' element={<Lost/>}></Route>
          <Route path='/Reservation' element={<Reservation/>}></Route>
          <Route path='/Salles/:id' element={<Salles/>}></Route>
          <Route path='/found' element={<Found/>}></Route>
          <Route path='/admin/posts' element={<AdPostChange/>}></Route>
          <Route path='/admin' element={<Admin/>}></Route>
          <Route path='/admin/confirmposts' element={<AdPostConfirm/>}></Route>
          <Route path='/authenticate/facebook/' element={<Loginfacebook/>}></Route>
          <Route path='/authenticate/linkedin/' element={<Loginlinkedin/>}></Route>
        </Routes>
        </div>
  );
}

export default App;

