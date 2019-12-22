import React from 'react';
import Input from '../input/input';

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
                    const contentType = res.headers.get("content-type");
                    if(contentType && contentType.indexOf("application/json") !== -1){
                        props.registrationHandler();
                        return res.json();
                    }else{
                        return {};
                    }
                }).then((user)=>{
                    // console.log(user);
                    props.register(user)
                }).catch((err)=>{
                    console.log(err);
                })
        }

        return(
                <div>
                 <Input label={"email"} id="email" value={props.email}
                     type ={"email"} changeHandler={props.changehandler}/>

                 <Input label={"password"} id="password" value={props.password}
                    type={"password"} changeHandler={props.changehandler}/>
                    <button className="submitButton" 
                      onClick={()=>fetchUser(props.email,props.password)} type="submit">
                        Log In
                    </button>
                </div> 
        );
}

export default logInForm;