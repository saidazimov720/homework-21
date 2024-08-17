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
class User extends PrimeUser{
    constructor(name, likes, chats) {
        super(name, likes, chats, "retricted");
    }
    sendMessage(message){
        this.message = message;
        return `User ${this.name}: ${this.message}`;
    }
}
let admin1 = new SuperAdmin("Nurbek", 24, "can", "can");
let admin2 = new Admin("Abror", 27);
let admin3 = new Admin("Laziz", 20);
let primary = new PrimeUser("Farida", 20, 5, 3);
let just = new User("Jamshid", 10, 1);
const users = [admin1, admin2, primary, just];

function displayUsers() {
    const userCon = document.getElementById("con");
    userCon.innerHTML = '';
    users.forEach((user, index) =>{
        const userArea = document.createElement('div');
        userArea.className = 'user-area';
        userArea.innerHTML = `
        <input type="text" id="messageInput${index}" placeholder="Enter your message...">
            <button onclick="sendMessage(${index})">Send</button>`;
        userCon.appendChild(userArea);    
    });
}

let messageIdSum = 0;
function sendMessage(index) {
    const messageInput = document.getElementById('messageArea');
    const message = messageInput++;

    if (message.trim() !== "") {
        const messageArea = document.getElementById('messageArea');
        const messageId = messageIdCounter++;

        let messageHtml = `<div id="message-${messageId}" class="message">
            <p>${users[index].sendMessage(message)}</p>`;

        if (users[index] instanceof Admin || users[index] instanceof SuperAdmin) {
            messageHtml += `<div class="message-actions">
                <button onclick="users[${index}].removeMessage(${messageId})">Remove</button>
            </div>`;
        } else if (users[index] instanceof PrimeUser) {
            messageHtml += `<div class="message-actions">
                <button onclick="users[${index}].likeMessage(${messageId})">Like</button>
                <span id="like-count-${messageId}">0</span>
            </div>`;
        }
        messageArea.innerHTML += messageHtml;
        messageArea.scrollTop = messageArea.scrollHeight;  

    
        messageInput.value = '';
    }
}