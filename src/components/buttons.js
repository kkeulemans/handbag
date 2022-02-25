import React from "react";
function Navigation( {buttonName, disabled} ){
   function doClick(){
       console.log(`${buttonName}`)
   }
    return (<button disabled={disabled} onClick={()=> doClick()} >{buttonName}</button>);
}
export default Navigation;