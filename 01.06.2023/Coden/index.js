//Variable
let chatMsgIndex = 0;

//Functions
function TypeText() {
  //user input
  let userText = prompt("How are you?");
  //Connections
  const conWithChat = document.getElementById("chat");
  //Print userText on screen if connection is true
  PrintTextOnScreen(CheckConnection(conWithChat), userText);
}

function CheckConnection(connection) {
  //If connection is NOT true (there is no connection with element id) return false
  if (!connection) return false;
  //When we have connection with element id
  return connection;
}

function PrintTextOnScreen(connection, userText) {
  //When we dont have connection with element show it in console
  if (connection === false) return console.log("No Connection");
  // set number value to chat message index
  let number = chatMsgIndex;
  //increase chat message index by 1
  chatMsgIndex++;
  //Add HTML-Element to Screen
  connection.innerHTML += `<div><p id='chat-msg-${number}'>${userText}</p><button onclick="EditText(${number})">edit</button></div>`;
}

function Leeren() {
  //Connections
  const conWithTextField = document.getElementById("textfeld");
  //Clear Text Field Value on Connected Element
  ClearTextField(CheckConnection(conWithTextField));
}
function ClearTextField(connection) {
  //When connection Failed show message in console
  if (connection === false) return console.log("No Connection");
  //When connected set actual value to empty
  connection.value = "";
}

function EditText(number) {
  //Connections
  const conWithChatMsg = document.getElementById(`chat-msg-${number}`);
  //When connection Failed show message in console
  if (!conWithChatMsg) return console.log("No Connection");
  //When Connected Edit actual value and save new one
  conWithChatMsg.innerHTML = prompt("How are you?", conWithChatMsg.innerHTML);
}

function LiveTypeInTextField() {
  //Connections
  const conWithTextField = document.getElementById("textfeld");
  const conWithChat = document.getElementById("chat");
  //When number of messages is 0 than create first element
  if (chatMsgIndex == 0) {
    conWithChat.innerHTML += `<div><p id='chat-msg-0'></p><button onclick="EditText(0)">edit</button></div>`;
    //Increase number of messages
    chatMsgIndex = 1;
  }
  //Count last item index
  let lastItemIndex = chatMsgIndex - 1;
  //Conn to last chat msg id
  const connWithLastItem = document.getElementById(`chat-msg-${lastItemIndex}`);
  //Set last chat msg item value to text field value
  connWithLastItem.innerHTML = conWithTextField.value;
}
