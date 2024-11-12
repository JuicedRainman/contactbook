class Contact {
    constructor(id, name, number, emailadress) {
        this.id = id;
        this.name = name;
        this.number = number;
        this.emailadress = emailadress;
    }

    createHTML(){
        return `<li>${this.name} - ${this.number} - ${this.emailadress} <button class="deleteContactButton" cid=${this.id}>verwijder Contact</button></li>`;
    }
}