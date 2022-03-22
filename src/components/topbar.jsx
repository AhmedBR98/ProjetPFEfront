import React from 'react'
import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import {ReactComponent as Profilepic} from 'C:/Users/AhmedBR/Desktop/React proj/pfe-project/src/components/assets/User.svg';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import { Link } from '@material-ui/core';






const Topbar=()=> {

const yellow={
    color: '#ffffff'
}

    const imagesize={
    width: 32,
    height: 32,
    borderradius: '50%',
    objectfit: 'cover',
    cursor: 'pointer',}

    const logout =()=> {
      window.localStorage.clear();
      window.location.href = '/Login';
      setAnchorEl(null);
    }
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleChange = (event) => {
      setAuth(event.target.checked);
    };
  
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
      <Link to="/Home" href="/Home"> <span className="logo">LEVEL 1</span></Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
         
          <Link to='/Reservation' href='/Reservation'><span className="topbarLink">Reservation</span></Link>
          <Link to='/lost' href='/lost'><span className="topbarLink">Lost and Found</span></Link>
          <span className="topbarLink">Feed</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person style={yellow} />
            <span className="topbarIconBadge">99</span>
          </div>
          <div className="topbarIconItem">
            <Link to='/chat' href='/chat'><Chat style={yellow} /></Link>
            <span className="topbarIconBadge">99</span>
          </div>
          <div className="topbarIconItem">
            <Notifications style={yellow} />
            <span className="topbarIconBadge">99</span>
          </div>
        </div>
        <div>
        <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
               <Profilepic style={imagesize}/>
              </IconButton>
        
            
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
               <Link to="/Profile" href="/Profile"> <MenuItem  onClick={handleClose}>Profile</MenuItem></Link>

                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={logout}>Log out</MenuItem>
              </Menu></div>
        
      </div>
    </div>
    
  );
}
export default Topbar