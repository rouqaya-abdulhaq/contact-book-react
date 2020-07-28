const proxyUrl = "https://aqueous-coast-32163.herokuapp.com/";

export async function SubmitCall (newContact,oldContacts,token,stateUpdate,registerServerError,isLoading,isCompleted) {
    isLoading();
    fetch(proxyUrl + 'https://contact-book-backend.herokuapp.com/contactAdd',{
        method : 'PUT',
        headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "x-access-token" : token
        },
        body : JSON.stringify({
            userId : newContact.userId,
            firstName : newContact.firstName.value,
            lastName : newContact.lastName.value,
            email : newContact.email.value,
            phoneNumber : newContact.phoneNumber.value
        })
    }).then((res)=>{
        return res.json();
    }).then((contact)=>{
        const contacts = [...oldContacts, contact];
        stateUpdate("contacts",contacts);
        isCompleted();
    }).catch((err)=>{
        registerServerError("could not submit new contact");
        isCompleted();
    });
}

export const EditCall = (contactInfo,oldContacts,token,stateUpdate,registerServerError,isLoading,isCompleted) =>{
    isLoading();
    fetch(proxyUrl + 'https://contact-book-backend.herokuapp.com/contactEdit',{
            method : 'PUT',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "x-access-token" : token
            },
            body : JSON.stringify({
                firstName : contactInfo.editedContact.firstName.value,
                lastName : contactInfo.editedContact.lastName.value,
                email : contactInfo.editedContact.email.value,
                phoneNumber : contactInfo.editedContact.phoneNumber.value,
                contactId : contactInfo.id
            })
            }).then((res)=>{
                return res.json();
            }).then((contact)=>{
                const contacts = [...oldContacts];
                contacts[contactInfo.index] = contact;
                stateUpdate("contacts",contacts);
                isCompleted();
                return true;
            }).catch((err)=>{
                registerServerError("unable to edit contact");
                isCompleted();
            });
}

export const DeleteCall = (contactInfo,oldContacts,token,stateUpdate,registerServerError,isLoading,isCompleted) =>{
    isLoading();
    fetch(proxyUrl + 'https://contact-book-backend.herokuapp.com/contactDelete',{
            method : 'DELETE',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "x-access-token" : token
            },
            body : JSON.stringify({
                id : contactInfo.id
            })
            }).then((res)=>{
                if(res.status === 204){
                    const contacts = [...oldContacts];
                    contacts.splice(contactInfo.index,1);
                    stateUpdate("contacts",contacts);
                    isCompleted();
                    return true;
                }
                isCompleted();
            }).catch((err)=>{
                registerServerError("unable to delete contact");
                isCompleted();
            });
}

export const LoadContactsCall = (id,token,stateUpdate,registerServerError,isLoading,isCompleted) =>{
    isLoading();
    fetch(proxyUrl + `https://contact-book-backend.herokuapp.com/loadContacts?id=${id}`,{
            method : 'GET',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-access-token' : token
            }, 
        }).then((res)=>{
            return res.json();
        }).then((contacts) =>{
            stateUpdate("contacts",contacts);
            isCompleted();
        }).catch((err) =>{
            registerServerError("could not load contacts from server");
            isCompleted();
        })
}