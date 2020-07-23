import React, { useState } from 'react';
import './ChatRoom.css';

function ChatRoom(props) {
	const { sendMessage, messages } = props;
	const [message, setMessage] = useState('');

	function handleSubmit(e) {
		sendMessage(message);
		setMessage('');
		e.preventDefault();
	}

	function handleChange(e) {
		setMessage(e.target.value);
	}

	return (
		<div className="chat-container">
			<input
				type="text"
				value={message}
				name="message"
				onChange={handleChange}
			/>
			<button onClick={handleSubmit}>Send</button>

			<ul>
				{messages.map(message => <li>{message}</li>)}
			</ul>
		</div>
	);
}

export default ChatRoom;
