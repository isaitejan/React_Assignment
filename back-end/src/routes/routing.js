const express = require('express');
const router = express.Router();
const srvcs = require('../services/services.js');

router.post('/machstatz/add_new_user',(req,res,next)=>{
    let body_data = req.body;
    srvcs.insertingData(body_data).then((op)=>{
        res.send({
            message: "Created the new user successfully.",
            status: "Success"
        });
    })
    .catch((err)=>{
        next(err);
    })  
})

router.get('/machstatz/get_all_users',(req,res,next)=>{
    srvcs.gettingData().then((op)=>{
        res.send(op);
    })
    .catch((err)=>{
        next(err);
    })
})

router.delete('/machstatz/delete_existing_user',(req,res,next)=>{
    let body_data = req.body.email;
    srvcs.deletingData(body_data).then((op)=>{
            res.send(
                {
                    message: "User deleted successfully.",
                    status: "Deleted"
                }
                );
    })
    .catch((err)=>{
        next(err);
    })
})

module.exports = router;