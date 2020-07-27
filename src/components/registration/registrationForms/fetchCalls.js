const proxyUrl = "https://cors-anywhere.herokuapp.com/";

export async function signUpFetchCall (user,register,registerServerError) {
    fetch(proxyUrl + "https://contact-book-backend.herokuapp.com/signUp",{
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
                }
              }).then((user)=>{
                  if(user){
                    register(user.user,user.data);
                  }
              }).catch((err)=>{
                  registerServerError("unable to register user");
              })
}

export async function logInFetchCall (userCredintials,register,registerServerError) {
    fetch(proxyUrl + "https://contact-book-backend.herokuapp.com/signIn",{
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
        }
    }).then((user)=>{
        if(user){
            register(user.user,user.data)
        }
    }).catch((err)=>{
        console.log(err);
        registerServerError("unable to log user.");
    })
}