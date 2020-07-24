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
			<div className="chat-messages">
				{messages.map((message, index) => {
					return message.username === 'SYSTEM' ?
					<div key={index} className="message">
						<span className="metadata">{message.text}</span><br />
						<span className="metadata">{message.timestamp}</span>
					</div>
					:
					<div key={index} className="message">
						<span className="metadata">{message.username}:</span><br />
						{message.text}<br />
						<span className="metadata">{message.timestamp}</span>
					</div>;
				}
				)}
			</div>
			<div className="send-message-button">
				<input
					type="text"
					value={nextMessage}
					name="message"
					onChange={handleChange}
				/>
				<button className="button" onClick={handleSubmit}>Send</button>
			</div>
		</div>
	);
}

export default ChatRoom;
