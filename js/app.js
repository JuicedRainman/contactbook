let app = (function() {

    let contactList;
    let contactListContact;

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
            console.log(contact);

            contactListContact = document.getElementById('actualContactList')
            contactListContact.addEventListener('click', function(e) {
                if(e.target.classList.contains('deleteContactButton')) {
                    contactList.clearOne(e.target.getAttribute('cid'));
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