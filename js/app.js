let app = (function() {

    let contactList;

    let init = function() {
        contactList = new ContactList();
        console.log('contactlist has been initialized');

            // ToevoegKnop
        let addButton = document.getElementById("addcontactbutton");
        let prevID = 0;

        addButton.addEventListener('click', () => {
            let contactname = document.getElementById('contactname').value;
            let contactnumber = document.getElementById('contactnumber').value;
            let contactemail = document.getElementById('contactemail').value;
            let id = ++prevID;

            let contact = new Contact(id, contactname, contactnumber, contactemail);

            contactList.addContact(contact);
            displayContact(contact);
            console.log(contact);
        })
    }

    let displayContact = function(contact) {
        document.getElementById("actualContactList").innerHTML += `<li>${contact.name} - ${contact.number} - ${contact.emailadress} <button type="button" id="removeContact">remove this contact</button></li>`;
    }

    let removeContactButton = document.getElementById("removeContact");
    
    removeContactButton.addEventListener('click', () => {
        let
    })

    return{
        init : init
    }
})();