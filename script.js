const adminPasword = "admin123";
class SuperAdmin {
    constructor(name, age, edit, remove) {
        this.name = name;
        this.age = age;
        this.edit = edit;
        this.remove = remove;
        this.message = "";
    }

    sendMessage(message){
        this.message = message;
        return `SuperAdmin${this.name}: ${this.message}`;
    }
    removeMessage(messageId){
        if (this.remove ==="can" && prompt("Enter Admin password") === adminPasword) {
            document.getElementById(`message - ${messageId}`).remove();
        }else{
            alert("Incorrect password");
        }
    }
}

class Admin extends SuperAdmin {
    constructor(name, age) {
        super(name, age, "limited", "limited");
    }
    sendMessage(message){
        this.message = message;
        return `Admin ${this.name}: ${this.message}`;
    }
    removeMessage(messageId){
        if (prompt("Enter Admin password:" === adminPasword)) {
            document.getElementById(`message - ${messageId}`).remove();
        } else {
            alert("Incorrect password");
        }
    }
}

class PrimeUser {
    constructor(name, likes, chats, privatechats) {
        this.name = name;
        this.likes = likes;
        this.chats = chats;
        this.privatechats = privatechats;
        this.message = "";
    }
    sendMessage(message){
        this.message = message;
        return `PrimeUser ${this.name}: ${this.message}`;
    }
    likeMessage(messageId){
        const likeElement = document.getElementById(`like - ${messageId}`);
        likeElement.textContent = parseInt(likeElement.textContent) + 1;
    }
}
