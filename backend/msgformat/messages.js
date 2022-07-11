const moment = require("moment");

function msgFormat(username,text){
    return {
        username,
        text,
        time: moment().format('h:mm: a')
    }
}


module.exports = msgFormat