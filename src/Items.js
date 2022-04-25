import React, {useState} from "react"




const Items=(props)=> {
 
  

  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mx-4">
    <div className="card p-0 overflow-hidden h-100 shadow">
  <img src={props.img} className="card-img-top img-fluid" />
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <h5 className="card-title">{props.price}</h5>
    <p className="card-text">{props.desc}</p>
    {/* <button href="#" className="btn btn-success" onClick={addItem(props.item)}>Add To Cart</button> */}
  </div>
</div>
    </div>
  ); 
}

export default Items;
