import React, { useState } from 'react';
import { connect, disconnect, sendMessage } from './webSocketManager';
import NameInput from './components/NameInput';
import ChatRoom from './components/ChatRoom';

function App() {
	const [messages, setMessages] = useState([]);

	function appendMessage(msg) {
		setMessages(messages => [...messages, msg]);
		//setMessagesList(list => `${list}/n${msg}`);
	}

	// function handleSubmit(e) {
	// 	sendMessage(message);
	// 	e.preventDefault();
	// }

	function enterChatRoom(name) {
		connect(name, appendMessage);
	}

	return (
		<div className="App">
			<h1>
				Chat
			</h1>
			<NameInput enterChatRoom={enterChatRoom}/>
			<ChatRoom sendMessage={sendMessage} messages={messages}/>
		</div>
	);
}

export default App;
