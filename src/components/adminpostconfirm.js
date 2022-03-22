import React , {useState , useEffect} from "react";
import Topbar from "./topbar";
import axios from 'axios';
import { Card , CardTitle , CardText} from 'reactstrap';


 function  AdPostConfirm () {
  var type=localStorage.getItem('type')
  
  useEffect(() => {
    if(type!='admin')
    {window.location.href='/Home'}

  }, [])
  // else
  // {window.location.href='/Home'}
  async function update(id,decision){
    const response = await fetch('http://localhost:8000/lost/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id:id,
          decision:decision,
        }),
      })
      console.log(response);
      window.location.reload(false)
 }
 async function deletee(id){
  const response = await fetch('http://localhost:8000/lost/delete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id:id,
      }),
    })
    console.log(response);
    window.location.reload(false)
}

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
     <p>{losts.accepted}</p>
    </CardText>
    <row>
    {/* <button onClick={()=>update(losts._id,"Accepted")}>Accept</button>
    <button onClick={()=>update(losts._id,"Denied")}>Deny</button> */}
    <button onClick={()=>deletee(losts._id)}>Found</button>
    </row>
    </Card>
    </row>


          ))}
          
      {/* {lost.map((losts)=>(
          <div>
         {losts.description}
          </div>
          ))}
       */}


</>
    ); 
    }




export default AdPostConfirm;
