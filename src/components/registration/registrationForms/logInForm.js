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
                        props.serverErrHandler("USER NOT FOUND");
                    }
                }).then((user)=>{
                    if(user){
                        props.register(user)
                    }
                }).catch((err)=>{
                    console.log(err);
                })
        }


        const email = props.assigninput(props.values.email);
        const password = props.assigninput(props.values.password);


        return(
                <div>
                 <Input label={"email"} id="email" inputType={"email"} value={props.email}
                     type ={"email"} changeHandler={props.changehandler}
                     isValid={email.isValid} hasChanged={email.changed}/>


                 <Input label={"password"} id="password" inputType={"name"} value={props.password}
                    type={"password"} changeHandler={props.changehandler}
                    isValid={password.isValid} hasChanged={password.changed}/>
                    <button className={"submitButton"} 
                      onClick={()=>fetchUser(email.value,password.value)} 
                      type="submit">
                        Log In
                    </button>
                </div> 
        );
}

export default logInForm;