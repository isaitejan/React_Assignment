const mongoose = require('mongoose');

const my_schema = mongoose.Schema({
    email : String,
    first_name : String,
    last_name : String,
    pwd : String,
    username : String
},{ collection : "React_Assignment" });



let dbconnect = ()=>{
    return mongoose.connect('mongodb://localhost:27017/machstatz',{useNewUrlParser:true , useUnifiedTopology:true})
        .then((db)=>{
            return db.model("React_Assignment",my_schema)
        })
        .catch((err)=>{
            let err1 = new Error("Couldn't connect to database!");
            throw err1;
        })
}

module.exports = dbconnect;