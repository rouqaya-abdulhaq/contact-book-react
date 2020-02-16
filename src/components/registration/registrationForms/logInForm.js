import React from 'react';
import Input from '../../UI/input/input';

const logInForm = (props) => {
       const fetchUser = (email , password) =>{
            fetch("http://localhost:5000/signIn",{
                    method : 'POST',
                    headers : {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body : JSON.stringify({
                        email : email,
                        password : password
                      })
                }).then((res)=>{
                    if(res.ok){
                        return res.json()
                    }else{
                        props.wrongCredintialsHandler();
                    }
                }).then((user)=>{
                    if(user){
                        props.register(user)
                    }
                }).catch((err)=>{
                    //
                })
        }
        return(
                <div>
                 <Input label={"email"} id="email" inputType={"email"} value={props.email}
                     type ={"email"} changeHandler={props.changehandler}/>


                 <Input label={"password"} id="password" inputType={"name"} value={props.password}
                    type={"password"} changeHandler={props.changehandler}/>
                    <button className={"submitButton"} 
                      onClick={()=>fetchUser(props.values.email.value,props.values.password.value)} 
                      type="submit">
                        Log In
                    </button>
                </div> 
        );
}

export default logInForm;