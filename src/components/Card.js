import React, { Component } from 'react';

import Card from'./cardui';
import Topbar from './topbar';

import lvl1 from './assets/yesyes.png';


const Reservation=()=> {
   
        return (
            <><Topbar/>
          <div className="container-fluid d-flex justify-content-center">
              <div className="row">
                  <div className="col-md-4">
                      <Card imgsrc={lvl1} title='Salle 1' id="621b72e6d42699642cc8d336"/>
                  </div>
                  <div className="col-md-4">
                     <Card imgsrc={lvl1} title='Salle 2' />
                  </div>
                  <div className="col-md-4">
                    <Card imgsrc={lvl1} title='Salle 3 '/>
                  </div>
              </div>
          </div>  
          </>
        );
    }
export default Reservation