import React, {useState} from "react"
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from "./Home";
import Cart from "./Cart"





function App() {

  

  return (
    
    <div className="container" >
      <table >
        <tbody>
        <tr>
          <td>
      <Home />
      </td></tr>
      <tr className="col-12 col-md-12 col-lg-12"><td>
      <Cart  />
      </td>
        </tr>
        </tbody>
      </table>
    </div>
    
  );
}

export default App;
