import React from 'react';

const SignIn = () =>{
    return(
        <div>
            <label>user name: </label>
           <input type="text" required></input>

            <label>email: </label>
           <input type="email" required></input>

           <label>password: </label>
           <input type="password" required></input>
        </div>
    );
}

export default SignIn;