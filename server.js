const http = require('http').createServer().listen(5000);

const io = require('socket.io').listen(http);

const SessionManager = require('./SessionManager');
const sessionManager = new SessionManager();

/**
 * @typedef message
 * @property {string} username Name of the user that sent the message
 * @property {string} text Text content of the message
 * @property {string} timestamp Formatted timestamp message was received by the server
 */

io.on('connection', (socket) => {
	console.log(`Connected: ${socket.id}`);

	socket.on('disconnect', () => {
		const name = sessionManager.removeUser(socket.id);
		const text = `${name} LEFT`;
		console.log(text);
		io.emit('message', {
			username: 'SYSTEM',
			text,
			timestamp: new Date().toLocaleString(),
		});
	});

	socket.on('join', nameObj => {
		const text = `${nameObj.name} JOINED`;
		console.log(text);
		sessionManager.addUser(socket.id, nameObj.name);
		
		io.emit('message', {
			username: 'SYSTEM',
			text,
			timestamp: new Date().toLocaleString(),
		});
	});

	socket.on('message', msg => {
		const username = sessionManager.getUsername(socket.id);
		const enrichedMessage = {
			text: msg,
			username,
			timestamp: new Date().toLocaleString()
		};
		io.emit('message', enrichedMessage);
	});
});
