import React from "react";

 const Form = () =>{
  return(
      <div className="formWrapper">
         <label className="inputLabel">First Name : </label>
         <input type="text" className="inputText"></input>
         <label className="inputLabel">Last Name : </label>
         <input type="text" className="inputText"></input>
      </div>
  );
}

export default Form;