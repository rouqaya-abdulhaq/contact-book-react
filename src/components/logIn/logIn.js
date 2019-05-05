import React from 'react';

const LogIn = () =>{
    return(
        <div>
           <label>email</label>
           <input type="email" required></input>

           <label>password</label>
           <input type="password" required></input>
        </div>
    );
}

export default LogIn;