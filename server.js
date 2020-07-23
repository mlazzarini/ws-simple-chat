const http = require('http').createServer().listen(5000);

const io = require('socket.io').listen(http);

const sessions = {};

io.on('connection', (socket) => {
   console.log(`Connected: ${socket.id}`);

   socket.on('disconnect', () => {
      const name = sessions[socket.id];
      const msg = `${name} LEFT`;
      console.log(msg);
      delete sessions[socket.id];
      io.emit('message', msg);
   });

   socket.on('join', nameObj => {
      const msg = `${nameObj.name} JOINED`;
      console.log(msg);
      sessions[socket.id] = nameObj.name;
      io.emit('message', msg);
   });

   socket.on('message', msg => {
      io.emit('message', msg);
   });
});
