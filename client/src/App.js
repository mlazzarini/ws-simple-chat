import React, { useState, useEffect } from 'react';
import './App.css';
import { connect, disconnect, sendMessage } from './webSocketManager';

function App() {
	const [messagesList, setMessagesList] = useState('');
	const [message, setMessage] = useState('');

	useEffect(() => {
		connect(appendMessage);
		// return () => {
		//   disconnect();
		// }
	}, []);

	function appendMessage(msg) {
		setMessagesList(list => `${list}\n${msg}`);
	}

	function handleSubmit(e) {
		sendMessage(message);
		e.preventDefault();
	}

	function handleChange(e) {
		setMessage(e.target.value);
	}

	return (
		<div className="App">
			<h1>
				Chat
			</h1>
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
