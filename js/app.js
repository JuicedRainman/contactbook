let app = (function() {

    let contactList;

    let init = function() {
        contactList = new ContactList();
        console.log('contactlist has been initialized');

            // ToevoegKnop
        let addButton = document.getElementById("addcontactbutton");
        let prevID = 0;

        addButton.addEventListener('click', () => {
            let contactname = document.getElementById('contactname');
            let contactnumber = document.getElementById('contactnumber');
            let contactemail = document.getElementById('emailadress');
            let id = ++prevID;

            let contact = new Contact(id, contactname, contactnumber, contactemail);

            contactList.addContact(contact);
            console.log(contact);
        })
    }

    return{
        init : init
    }
})();