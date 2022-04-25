import React, {useState} from "react"
import Items from "./Items";
import data from "./data"




function Home() {

  

  return (
    <div >
     <h1 className="text-center">All items</h1>
     <section className="container">
         <div className="row justify-content-center">
             {data.map((item,index) =>{
                 return(
                     
                    
          <Items
           img={item.img}
           title={item.title} 
           desc={item.desc} 
           price={item.price} 
           item={item}
           key={index}
           />
      
                 )
})}
         </div>
     </section>
    </div>
  );
}

export default Home;
