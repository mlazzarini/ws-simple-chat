const http = require('http').createServer().listen(5000);

const io = require('socket.io').listen(http);

const SessionManager = require('./SessionManager');
const sessionManager = new SessionManager();

io.on('connection', (socket) => {
	console.log(`Connected: ${socket.id}`);

	socket.on('disconnect', () => {
		const name = sessionManager.removeUser(socket.id);
		const msg = `${name} LEFT`;
		console.log(msg);
		io.emit('message', msg);
	});

	socket.on('join', nameObj => {
		const msg = `${nameObj.name} JOINED`;
		console.log(msg);
		sessionManager.addUser(socket.id, nameObj.name);
		io.emit('message', msg);
	});

	socket.on('message', msg => {
		io.emit('message', msg);
	});
});
