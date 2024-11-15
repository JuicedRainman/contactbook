let app = (function() {

    let contactList;
    let contactListContact;

    let init = function() {
        contactList = new ContactList();
        console.log('contactlist has been initialized');

            // ToevoegKnop
        let addButton = document.getElementById("addcontactbutton");
        let prevID = 0;
        let editID = 0;
        let contactnameInput = document.getElementById('contactname');
        let contactnumberInput = document.getElementById('contactnumber');
        let contactemailInput = document.getElementById('contactemail');


        addButton.addEventListener('click', () => {
            let id = ++prevID;
            let contactname = contactnameInput.value;
            let contactnumber = contactnumberInput.value;
            let contactemail = contactemailInput.value;

            if(editID > 0) {
                contactList.editOne(editID, contactname, contactnumber, contactemail);
                editID = 0;
                addButton.innerHTML = "add a new contact"
            }
            else {
                let contact = new Contact(id, contactname, contactnumber, contactemail);

                contactList.addContact(contact);
                console.log(contact);
            }


            contactListContact = document.getElementById('actualContactList')
            contactListContact.addEventListener('click', function(e) {
                if(e.target.classList.contains('deleteContactButton')) {
                    contactList.clearOne(e.target.getAttribute('cid'));
                }
            })

            contactListContact.addEventListener('click', function(e) {
                if(e.target.classList.contains('editContactButton')) {
                    editID = e.target.getAttribute('cid');
                    let currentContact = contactList.getOne(editID);
                    contactnameInput.value = currentContact.name;
                    contactnumberInput.value = currentContact.number;
                    contactemailInput.value = currentContact.emailadress;
                    addButton.innerHTML = "Edit Contact";
                }
            })


            let buttonDE = document.getElementById("deleteAllContacts");
            buttonDE.addEventListener('click', function() {
                contactList.clearAll();
            })
        })

    }

    return{
        init : init
    }
})();