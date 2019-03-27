import React from "react";
import "./form.css";

 const Form = ()=> {
    getFirstName = ()=>{
      //
    }
    getLastName = ()=>{
      //
    }
    getFullName = ()=>{
      //
    }
    getPhoneNumber = ()=>{
      //
    }
    getEmail = ()=>{
      //
    }
    return(
      <div className="formWrapper">
         <label className="inputLabel">First Name : </label>
         <input type="text" className="inputBox" required ></input>

         <label className="inputLabel">Last Name : </label>
         <input type="text" className="inputBox" required ></input>

         <label className="inputLabel">Phone Number : </label>
         <input type="tel" className="inputBox"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required ></input>

         <label className="inputLabel">Email :  </label>
         <input type="email" className="inputBox" required ></input>

         <input type="button" value="save"
          className="save" onClick={this.props.handleSave}></input>
      </div>
    );
  }

export default Form;