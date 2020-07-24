import React, { useState } from 'react';
import './ChatRoom.css';

function ChatRoom(props) {
	const { sendMessage, messages } = props;
	const [nextMessage, setNextMessage] = useState('');

	function handleSubmit(e) {
		sendMessage(nextMessage);
		setNextMessage('');
		e.preventDefault();
	}

	function handleChange(e) {
		setNextMessage(e.target.value);
	}

	return (
		<div className="chat-container">
			<input
				type="text"
				value={nextMessage}
				name="message"
				onChange={handleChange}
			/>
			<button onClick={handleSubmit}>Send</button>
				{messages.map(message => 
					<div className="message">
						<span className="metadata">{message.username} wrote:</span><br />
						{message.text}<br />
						<span className="metadata">{message.timestamp}</span>
					</div>
				)}
		</div>
	);
}

export default ChatRoom;
