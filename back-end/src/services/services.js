const crd = require('../model/CRUD');

const service_obj = {};

service_obj.insertingData = (ipdata)=>{
    return crd.insertData(ipdata).then((opdata)=>{
        return opdata;
    })
}


service_obj.gettingData = ()=>{
    return crd.getData().then((opdata)=>{
        return opdata;
    })
}

service_obj.deletingData = (mailid)=>{
    return crd.deleteData(mailid).then((opdata)=>{
        return opdata;
    })
}

module.exports = service_obj;