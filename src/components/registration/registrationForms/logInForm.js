import React from 'react';
import Input from '../../UI/input/input';
import SubmitBtn from '../../UI/submitBtn/submitBtn';

const logInForm = (props) => {
        const email = props.assigninput(props.values.email);
        const password = props.assigninput(props.values.password);


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
                        props.invalidMsgHandler("USER NOT FOUND");
                    }
                }).then((user)=>{
                    if(user){
                        props.register(user)
                    }
                }).catch((err)=>{
                    props.registerServerError("unable to log user")
                    console.log(err);
                })
        }

        return(
            <div>
                <Input label={"email"} id="email" inputType={"email"} value={props.email}
                    type ={"email"} changeHandler={props.changehandler}
                    isValid={email.isValid} hasChanged={email.changed}/>


                <Input label={"password"} id="password" inputType={"password"} value={props.password}
                    type={"password"} changeHandler={props.changehandler}
                    isValid={password.isValid} hasChanged={password.changed}/>
                
                <SubmitBtn value={"Log In"} 
                clickHandler={()=>fetchUser(email.value,password.value)}
                infoArr={[email,password]}
                />
            </div> 
        );
}

export default logInForm;