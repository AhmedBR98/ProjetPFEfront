import react from 'react';
import'./Card-style.css';

const Card =props=>{
    return(
         <div className="Card text-center">
             <div className="overflow">
                 <img src={props.imgsrc} alt="image 1" className="card-img-top" />
             </div>
             <div className="card-body text-dark">
                 <h4 className="card-title">{props.title}</h4>
                 <p className="Card-text text-secondary">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias magnam iure animi, laudantium quasi con
                 </p>
                 <a href={"/Salles/"+props.id} className="btn btn-outline-success">Book</a>
             </div>
         </div>
    );
}
export default Card;