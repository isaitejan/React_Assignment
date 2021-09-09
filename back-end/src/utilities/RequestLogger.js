const fs = require('fs');

let requestLogger = (req , res , next)=>{
    fs.appendFile('RequestLogger.txt',req.method+" - "+req.path+" - "+new Date()+"\n",(err)=>{
        if(err){
            console.log("Request logging failed!");
            next(err);
        }else{
            next();
        }
        // console.log("Request logging failed!");
    })
}

module.exports = requestLogger;