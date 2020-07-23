import io from 'socket.io-client';

let socket;

export const connect = (name, fnCallback) => {
	socket = io(`http://localhost:5000`);
	socket.on('connect', () => {
		socket.emit('join', { 'name': name });
	});
	socket.on('message', msg => {
		fnCallback(msg);
	});
}

export const disconnect = () => {
	console.log('Disconnecting socket...');
	if (socket) socket.disconnect();
}

export const sendMessage = message => {
	if (socket) socket.emit('message', message);
}
