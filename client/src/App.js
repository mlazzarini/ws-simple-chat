import React, { useState } from 'react';
import './App.css';
import { connect, disconnect, sendMessage } from './webSocketManager';

function App() {
	const [messagesList, setMessagesList] = useState('');
	const [message, setMessage] = useState('');
	const [yourName, setYourName] = useState(null);

	function appendMessage(msg) {
		setMessagesList(list => `${list}/n${msg}`);
	}

	function handleSubmit(e) {
		sendMessage(message);
		e.preventDefault();
	}

	function handleChange(e) {
		setMessage(e.target.value);
	}

	function handleNameChange(e) {
		setYourName(e.target.value);
	}

	function enterChatRoom() {
		connect(yourName, appendMessage);
	}

	return (
		<div className="App">
			<h1>
				Chat
			</h1>
			<div className="name-container">
				<input
					type="text"
					placeholder="Name"
					value={yourName}
					name="yourName"
					onChange={handleNameChange}
				/>
				<button onClick={enterChatRoom}>Join chat room</button>
			</div>
			<div className="chat-container">
				<p>
					{messagesList}
				</p>
				<form onSubmit={handleSubmit}>
					<label>
						Message:
					<input type="text" value={message} onChange={handleChange} />
					</label>
					<input type="submit" value="Send" />
				</form>
			</div>
		</div>
	);
}

export default App;
