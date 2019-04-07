import React ,{Component} from "react";
import Input from "../components/input/input";

class Form extends Component{
    render(){
        return(
            <div className="formWrapper">
              <Input label={"name"}/>
            </div>
        );
    }

}

export default Form;