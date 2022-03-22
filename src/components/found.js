
import React , {useState , useEffect} from "react";
import Topbar from "./topbar";
import axios from 'axios';
import { Card , CardTitle , CardText} from 'reactstrap';


 function  Found () {
 const [lost,setlost] = useState([]);
 const getlost = () => {
axios.get('http://localhost:8000/lost/posts')
.then ((response) => {
console.log(response);
const mylost = response.data;
setlost(mylost);

});
 };
 useEffect  (() => getlost() , [])
    return (
        <>
      <Topbar/>
      
      {lost.map((losts)=>(
          <row>
      <Card body  className="text-right">
    <CardTitle tag="h5">
    {losts.title}
    </CardTitle>
    <CardText>
    <p><img src={require ('D:/Level1Backend/uploads/'+losts.Img)} height={150} width={150 }/>                              
     {losts.description} </p> 
    </CardText>
    </Card>
    </row>


          ))}
          
</>
    ); 
    }




export default Found;
