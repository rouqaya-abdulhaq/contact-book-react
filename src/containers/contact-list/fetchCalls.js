export const SubmitCall = (newContact,oldContacts,stateUpdate) =>{
    fetch('http://localhost:5000/contactAdd',{
        method : 'PUT',
        headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
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
        return true;
    }).catch((err)=>{
        console.log(err);
        return false;
    });
}

export const EditCall = (contactInfo,oldContacts,stateUpdate) =>{
    fetch('http://localhost:5000/contactEdit',{
            method : 'PUT',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
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
                return true;
            }).catch((err)=>{
                console.log(err);
                return false;
                // this.props.registerServerError("unable to edit contact");
            });
}

export const DeleteCall = (contactInfo,oldContacts,stateUpdate) =>{
    fetch('http://localhost:5000/contactDelete',{
            method : 'DELETE',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                id : contactInfo.id
            })
            }).then((res)=>{
                return res.json();
            }).then((contactIndex)=>{
                const contacts = [...oldContacts];
                contacts.splice(contactInfo.index,1);
                stateUpdate("contacts",contacts);
                return true;
            }).catch((err)=>{
                console.log(err);
                return false;
                // this.props.registerServerError("unable to delete contact");
            });
}

export const LoadContactsCall = (id,stateUpdate) =>{
    fetch(`http://localhost:5000/loadContacts?id=${id}`,{
            method : 'GET',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, 
        }).then((res)=>{
            return res.json();
        }).then((contacts) =>{
            stateUpdate("contacts",contacts);
        }).catch((err) =>{
            console.log(err);
            // this.props.registerServerError("unable to load contacts from server");
        })
}