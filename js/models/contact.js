class Contact {
    constructor(id, name, number, emailadress) {
        this.id = id;
        this.name = name;
        this.number = number;
        this.emailadress = emailadress;
    }

    createHTML(){
        return `<li>${this.name} <br> ${this.number} <br> ${this.emailadress}
        <button class="deleteContactButton" cid=${this.id}>verwijder contact</button>
        <button class="editContactButton" cid=${this.id}>edit contact</button></li>`;
    }
}