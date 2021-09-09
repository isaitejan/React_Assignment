const fs = require('fs');

let errorLogger = (err, req, res, next)=>{
    if(err){
        fs.appendFile('ErrorLogger.txt',err.stack+"\n",(errin)=>{
            if(errin){
                console.log("Error logging failed!");
            }
            res.json({"message":err.message,"status":err.status1});
        })
    }
}

module.exports = errorLogger;