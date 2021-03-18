const socket = io.connect();


const messageForm = document.getElementById('send-container');
const messageInput = document.getElementById('message-input');
const messageContainer= document.getElementById('message-container')
const userContainer = document.getElementById('user-area')
//tie in authenticaion here
const name = prompt('what is your name')
appendMessage('you joined')
socket.emit('new-user', name)

socket.on('chat-message',data => {
    appendMessage(`${data.name}: ${data.message}`)
})
socket.on('user-connected',name => {
    appendMessage(`${name} has connected`)
    appendUser(name)
})
socket.on('user-disconnected',name => {
    appendMessage(`${name} has disconnected`)
    removeUser(name)
})

messageForm.addEventListener('submit', e =>{
    e.preventDefault();
    const message = messageInput.value
    socket.emit('send-chat-message', message)
    appendMessage(` You: ${message}`)
    messageInput.value = ''
})

function appendMessage(message){
    const messageElement = document.createElement('div')
    messageElement.innerHTML = message
    messageContainer.append(messageElement)
}
appendUser(username => {
    const userElement = document.createElement('div');
    userElement.innerHTML = username;
    userElement.id = username
    userContainer.append(UserElement);
});
removeUser(username =>{
    delete document.getElementById(username);
})