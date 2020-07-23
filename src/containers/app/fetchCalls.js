export const updateStyleInDB = (token ,style ,userId) =>{
    fetch('https://contact-book-backend.herokuapp.com/selectStyle',{
          method : 'POST',
          headers : {
              'Content-Type': 'application/json',
              "x-access-token" : token
          },
          body : JSON.stringify({
            data : {
                style : style,
                id : userId
            }
          })
        }).catch((err)=>{
          console.log(err);
        });
}