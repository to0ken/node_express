import express from 'express'

const router = express.Router();


router.post('/login', (req, res) =>{
    const{login, password} = req.body??{}


    if(!login || !password && (!password && !login)) {
        res.status(401).send({status:"error"})
    }
    if(login === "test" && password === "test"){
        res.status(200).send({status: "seccess"})
    }
    else{
        res.status(401).send({status:"error"})
    }
})

export default router;
