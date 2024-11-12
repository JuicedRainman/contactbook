class ContactList {
    constructor(contacts) {
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

    clearOne(index) {
        this.contacts = this.contacts.filter(o => o.id != parseInt(index));
        this.refreshView();
    }
}