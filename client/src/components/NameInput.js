import React, { useState } from 'react';

function NameInput(props) {
	const { enterChatRoom } = props;
	const [yourName, setYourName] = useState('');

	function handleNameChange(e) {
		setYourName(e.target.value);
	}

	function submitName() {
		enterChatRoom(yourName);
	}

	return (
		<div className="name-container">
			<input
				type="text"
				placeholder="Name"
				value={yourName}
				name="yourName"
				onChange={handleNameChange}
			/>
			<button onClick={submitName}>Join chat room</button>
		</div>
	);
}

export default NameInput;
