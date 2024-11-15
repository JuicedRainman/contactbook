class ContactList {
    constructor() {
        this.contacts = []; 
    }
    
    addContact(contact) {
        this.contacts.push(contact);
        this.refreshView();
    }

    refreshView() {
        let overview = document.getElementById('actualContactList');
        overview.innerHTML = '';

        for(let i = 0; i < this.contacts.length; i++) {
            overview.innerHTML += this.contacts[i].createHTML();
        }
    }

    getOne(index) {
        return this.contacts.filter(o => o.id == parseInt(index))[0];
    }

    editOne(index, contactname, contactnumber, contactemail) {
        let cO = this.getOne(index);
        cO.name = contactname;
        cO.number = contactnumber;
        cO.emailadress = contactemail;
        this.refreshView();
    }

    clearOne(index) {
        this.contacts = this.contacts.filter(o => o.id != parseInt(index));
        this.refreshView();
    }


    clearAll() {
        this.contacts = [];
        this.refreshView();
    }
}
