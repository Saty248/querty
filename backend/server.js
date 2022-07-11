

const express = require("express");
const http = require("http");
const path=require('path');
const socketio = require("socket.io");
const msgFormat=require('./msgformat/messages')
const {userInfo,getuser,userLeft,userRoom,userRoom2}=require('./msgformat/users')
const app = express();
const server=http.createServer(app);
const io = socketio(server);


// Set static folder
app.use(express.static(path.join(path.resolve(__dirname,'..'),'frontend')));
const admin='admin@querty';




// Run when client connects
io.on("connection", (socket) => {
    console.log('joined');

    socket.on('joinRoom',({username,room})=>{
        const user=userInfo(socket.id,username,room);
        socket.join(user.room);//joins user to a room 
            // Broadcast when a user connects
        socket.emit('message',msgFormat(admin,'welcome'));
    socket.broadcast.to(user.room).emit('message',msgFormat('admin',`${user.username} joined a chat`));
    
    // Send users and room info
    io.to(user.room).emit("roomUsers", {
        room: user.room,
        users: userRoom(user.room),
      });
    
    });
    

   
     // Listen for chatMessage
    socket.on('chatMessage',(msg)=>{
       const user= getuser(socket.id);
       
        io.to(user.room).emit('message',msgFormat(user.username,msg));
    })
    
    // Runs when client disconnects
    socket.on("disconnect", () => {
        
        const user=userLeft(socket.id);
        console.log(user);
        if(user){
        io.to(user.room).emit('message',msgFormat('admin', `${user.username} left`));
            // Send users and room info
        io.to(user.room).emit("roomUsers", {
            room: user.room,
            users: userRoom2(user.room,user.id)
          });
    }
    })
    });

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));