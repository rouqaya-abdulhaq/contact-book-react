export async function signUpFetchCall (user,register,invalidInputHandler,registerServerError) {
    fetch("http://localhost:5000/signUp",{
                  method : 'POST',
                  headers : {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json'
                  },
                  body : JSON.stringify({
                    firstName : user.firstName,
                    lastName : user.lastName,
                    email : user.email,
                    password : user.password
                    })
              }).then((res)=>{
                if(res.ok){
                  return res.json();
                }else{
                  invalidInputHandler("INVALID INPUT");
                } 
              }).then((user)=>{
                  if(user){
                    register(user);
                  }
              }).catch((err)=>{
                  registerServerError("unable to register user");
              })
}

export async function logInFetchCall (userCredintials,register,invalidInputHandler,registerServerError) {
    fetch("http://localhost:5000/signIn",{
        method : 'POST',
        headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body : JSON.stringify({
            email : userCredintials.email,
            password : userCredintials.password
          })
    }).then((res)=>{
        if(res.ok){
            return res.json()
        }else{
            invalidInputHandler("USER NOT FOUND");
        }
    }).then((user)=>{
        if(user){
            register(user)
        }
    }).catch((err)=>{
        registerServerError("unable to log user");
    })
}