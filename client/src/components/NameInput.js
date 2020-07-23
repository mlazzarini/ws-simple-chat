import React, { useState } from 'react';

function NameInput(props) {
	const { enterChatRoom } = props;
	const [yourName, setYourName] = useState('');
	const [disabled, setDisabled] = useState(false);

	function handleNameChange(e) {
		setYourName(e.target.value);
	}

	function submitName() {
		enterChatRoom(yourName);
		setDisabled(true);
	}

	return (
		<div className="name-container">
			<input
				disabled={disabled}
				type="text"
				placeholder="Name"
				value={yourName}
				name="yourName"
				onChange={handleNameChange}
			/>
			<button onClick={submitName} disabled={disabled}>Join chat room</button>
		</div>
	);
}

export default NameInput;
