const connection = require('../utilities/connection');
const CRUD = {};

CRUD.insertData = (insData)=>{
    return connection().then((db)=>{
        return db.find({"email":insData.email}).then((ret_data)=>{
            if (ret_data.length !== 0){
                throw new Error();
            }else{
                return db.find({"username":insData.username}).then((ret1_data)=>{
                    if(ret1_data.length !== 0){
                        throw new Error();
                    }else{
                        return db.create(insData).then((data)=>{
                            return data;
                        })
                    }
                })
            }

        })
    })
    .catch((error)=>{
        let err = new Error("User with provided email or username is already exist.");
        err.status1 = "Error";
        throw err;
    })
}

CRUD.getData = ()=>{
    return connection().then((db)=>{
        return db.find({}).then((ret_data)=>{
            if (ret_data.length !== 0){
                return ret_data;
            }else{
                throw new Error();
            }
        })
    })
    .catch((error)=>{
        let err = new Error("Getting Data Failed");
        err.status = 500;
        throw err;
    })
}

CRUD.deleteData = (mailid)=>{
    return connection().then((db)=>{
        return db.deleteOne({"email":mailid}).then((ret)=>{
            if (ret.deletedCount == 1){
                return ret;
            }else{
                throw new Error();
            }
        })
    })
    .catch((error)=>{
        let err = new Error("Unable to delete the user or user may not exist.");
        err.status1 = "Error";
        throw err;
    })
}

module.exports = CRUD;