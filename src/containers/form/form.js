import React from "react";
import "./form.css";
/* i might as well recode this entire class maybe 
cut it to smaller peices
ok so i will be making this the smart container with dumb input
components and the card component will be a dumb styling wrapper*/ 
 class Form extends React.Component {
    // let properties = this.props;
    // let firstNameInput = React.createRef();
    // let lastNameInput = React.createRef();
    // let phoneNumberInput = React.createRef();
    // let emailInput = React.createRef();
    
     getFirstName = ()=>{
      return firstNameInput.current.value;
    }
     getLastName = ()=>{
      return lastNameInput.current.value;
    }
     getFullName = ()=>{
      return getFirstName + getLastName;
    }
    getPhoneNumber = ()=>{
      return phoneNumberInput.current.value;
    }
    getEmail = ()=>{
      return emailInput.current.value;
    }

    render(){
    return(
      <div className="formWrapper">
         <label className="inputLabel">First Name : </label>
         <input type="text" className="inputBox"
          ref={firstNameInput} required ></input>

         <label className="inputLabel">Last Name : </label>
         <input type="text" className="inputBox" 
          ref={lastNameInput} required ></input>

         <label className="inputLabel">Phone Number : </label>
         <input type="tel" className="inputBox"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          ref={phoneNumberInput} required ></input>

         <label className="inputLabel">Email :  </label>
         <input type="email" className="inputBox"
          ref={emailInput} required ></input>

         <input type="button" value="save"
          className="save" ></input>
      </div>
    );
    }
 }

export default Form;