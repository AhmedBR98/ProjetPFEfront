import Topbar from './topbar';
// import Sidebar from "../../components/sidebar/Sidebar";
import Share from './Share';
// import Rightbar from "../../components/rightbar/Rightbar";
import "./HomePage.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Popover, Button } from 'antd';
import Post from './Posts';

export default function Home() {
var type=localStorage.getItem('type')
  if(!type)
  {window.location.href='/login'}
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        {/* <Sidebar /> */}
  
        <Share/>
        {/* <Rightbar/> */}
      </div>
      <Post/>
    </>
  );
}