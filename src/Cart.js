import React, {useState, useEffect} from "react"
// import {useCart} from "react-use-cart"
import data from "./data"
import img1 from './img/img1.png'




const Cart=()=> {
//  const {isEmpty,
// totalUniqueItems,
// items,
// totalItems, 
// cartTotal,
// updateItemQuantity,
// removeItem,
// emptyCart } = useCart()
const [totalItems, setTotal]=useState(data)
const [Grapesquantity ,setGarapes]=useState(0)
const [Melonsquantity ,setMelons]=useState(0)
const [Orangequantity ,setOrange]=useState(0)

useEffect(()=>{
    if(totalItems.length !==0) {
const grapes = totalItems.products.filter((item)=>{
  return  item.id === 1
}
)
setGarapes(grapes.length)

const melobs = totalItems.products.filter((item)=>{
    return  item.id === 2
  })
  setMelons(melobs.length)

  const oranges = totalItems.products.filter((item)=>{
    return  item.id === 3
  })
setOrange(oranges.length)
    }

},[])




 const addItem = (id) =>{
     const upadatedItems = totalItems
     if(id===1){
       upadatedItems.push( {
        id :1 ,
        img : img1,
      title : "Grapes",
        desc : "",
        price : "47 Rs" 

    })  
       setTotal(upadatedItems)
     }
   


}

if (totalItems.length===0) return <h1 className="text-center">Your Cart Is Empty</h1>
  

  return (
      <section className="py-4 container">
    <div className="row-justify-content-center">
        <div className="col-12">
            <h5> Total items : ({totalItems.products.length})</h5>
            <table className="table table-light table-hover m-0">
                {totalItems.products.map((item,index)=>{
                    return(
                    <tr key={index}>
                        <td>
                            < img src={item.img}  style={{height : '6rem'}} /> 
                        </td>
                        <td>{item.title}</td>
                        <td>{item.price}</td>
                        
                        <td>{item.title === "Grapes" ?( `Quantity(${Grapesquantity})`) : null }
                        {item.title === "Watermelon" ? (`Quantity(${Melonsquantity})`) : null }
                        {item.title === "Orange" ? (`Quantity(${Orangequantity})`) : null } </td>
                        <td>
                        
                            {/* <button
                            className="btn btn-info ms-2" onClick={()=>{deleteItem(item.id)}}>-</button> */}
                             <button
                            className="btn btn-info ms-2" onClick={()=>{addItem(item.id)}}>+</button>
                             {/* <button
                            className="btn btn-info ms-2" onClick={() =>{removeItem(item.id)}}>Remove Item</button> */}
                        </td>
                        </tr>)

                })}
            </table>
        </div>
  
    </div>
    </section>
  ); 
}

export default Cart;
