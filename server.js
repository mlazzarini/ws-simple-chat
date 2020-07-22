const http = require('http').createServer().listen(5000);

const io = require('socket.io').listen(http);

io.on('connection', (socket) => {
   console.log(`Connected: ${socket.id}`);

   socket.on('disconnect', () =>
      console.log(`Disconnected: ${socket.id}`));

   socket.on('message', msg => {
      io.emit('message', msg);
   });
});
