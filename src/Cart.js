import React, {useState, useEffect, useDebugValue} from "react"
// import {useCart} from "react-use-cart"
import data from "./data"





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
console.log(totalItems)

const [Grapesquantity ,setGarapes]=useState(data[0].quantity)
const [Melonsquantity ,setMelons]=useState(data[1].quantity)
const [Orangequantity ,setOrange]=useState(data[2].quantity)

const addItem = (id) =>{
 
  const upadatedItems =totalItems
  if(id===1){
 var addedG =  upadatedItems[0].quantity + 1
 upadatedItems[0].quantity =addedG
 setGarapes( addedG)
}
else if(id===2){
  var addedM = upadatedItems[1].quantity + 1
  upadatedItems[1].quantity =addedM
  setMelons( addedM)
}
else if(id===3){
 var addedO = upadatedItems[2].quantity + 1
 upadatedItems[2].quantity =addedO
 setOrange( addedO)
}
else{
  return
}

}


const deleteItem = (id) =>{
  const upadatedItems =totalItems
  if(id===1){
    if(upadatedItems[0].quantity > 0){
 var addedG =  upadatedItems[0].quantity - 1
 upadatedItems[0].quantity =addedG
 setGarapes( addedG)
    }
}
else if(id===2){
  if(upadatedItems[1].quantity > 0){
  var addedM = upadatedItems[1].quantity - 1
  upadatedItems[1].quantity =addedM
  setMelons( addedM)
  }
}
else if(id===3){
  if(upadatedItems[2].quantity > 0){
 var addedO = upadatedItems[2].quantity - 1
 upadatedItems[2].quantity =addedO
 setOrange( addedO)
  }
}
else{
  return
}

}

const removeItem = (id) =>{
  const upadatedItems = totalItems

  if(id===1){
upadatedItems[0].quantity = 0
setGarapes(upadatedItems[0].quantity)
  }
 else if(id===2){
    upadatedItems[1].quantity = 0
    setMelons(upadatedItems[1].quantity)
      }
     else if(id===3){
        upadatedItems[2].quantity = 0
        setOrange(upadatedItems[2].quantity)
          }
          else{
            return
          }

}


// useEffect(() => {
//     if(totalItems.length !==0) {

//       const grapes = totalItems.filter((item)=>{
//         return  item.id === 1
//       }
//       )
      
//       setGarapes(grapes.length)
// const melobs = totalItems.filter((item)=>{
//     return  item.id === 2
//   })
//   setMelons(melobs.length)

//   const oranges = totalItems.filter((item)=>{
//     return  item.id === 3
//   })
// setOrange(oranges.length)
//     }

// },[])









if (totalItems.length===0) return <h1 className="text-center">Your Cart Is Empty</h1>
  

  return (
      <section className="py-4 container">
    <div className="row-justify-content-center">
        <div className="col-12">
            
            <table className="table table-light table-hover m-0">
                {data.map((item,index)=>{
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
                        
                             <button
                            className="btn btn-info ms-2" onClick={()=>{deleteItem(item.id)}}>-</button> 
                             <button
                            className="btn btn-info ms-2" onClick={()=>{addItem(item.id)}}>+</button>
                              <button
                            className="btn btn-info ms-2" onClick={() =>{removeItem(item.id)}}>Remove Item</button> 
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
