import React ,{Component} from "react";
import Input from "../../components/input/input";

class Form extends Component{
    render(){
        return(
            <div className="formWrapper">
              <Input label={"first name"} type={"text"}/>
              <Input label={"last name"} type={"text"}/>
              <Input label={"email"} type={"email"}/>
              <Input label={"phone number"} type={"tel"} 
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
            </div>
        );
    }

}

export default Form;