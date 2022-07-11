const {userInfo,getuser,userLeft,userRoom,userRoom2}=require('../msgformat/users');

//test to check correct user infornation is returned.
test('correct user details',()=>{
    expect((userInfo('fd','saty','js'))).toEqual({"id":"fd","room":"js","username":"saty"});
})

//getuser working properly
test('correct info',()=>{
    expect((getuser("fd"))).toEqual({"id":"fd","room":"js","username":"saty"});
})

//correct info working properly
test('correct user left info',()=>{
    expect((userLeft("fd"))).toEqual({"id":"fd","room":"js","username":"saty"});
})

test('correct room info',()=>{
    expect((userRoom2("fd","roon"))).    toStrictEqual([]);
})




