let users=[];

function userInfo(id,username,room){
    let user={id,username,room};
    users.push(user);
    return user;   
}

function getuser(id){

    return users.find(user => user.id===id);

    
}

function userLeft(id){
    const ind = users.findIndex(user => user.id === id);
    if(ind!=-1){
        console.log(users[ind]);
        return users[ind];
    }
}

function userRoom(room){
   
    return users.filter(user=>user.room===room);
}
function userRoom2(room,id){
    const ind = users.findIndex(user => user.id === id);
    const newList=users.splice(ind,1);
    return newList.filter(user=>user.room===room);
}

module.exports={userInfo,getuser,userLeft,userRoom,userRoom2};