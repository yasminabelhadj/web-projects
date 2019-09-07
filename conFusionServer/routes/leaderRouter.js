const express = require('express')
const bodyParser = require('body-parser');
const leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());
leaderRouter.route('/')
.all((req,res,next)=>{
    res.statusCode = 200 ; 
    res.setHeader('Content-Type','Text/html');
    next();
})
.get ((req,res,next)=>{
    res.end('Will sedn all the leaders to you !')
})
.post((req,res,next)=>{
    res.end('will send you '+req.body.name+' with details : '+req.body.description);
})
.put((req,res,next)=>{
    statusCode = 403 ;
    res.end ('PUT operation is not supported on /leaders');
})
.delete((req,res,next)=>{
    res.end('Deleting all leaders')
    
});


//parameters : 
leaderRouter.route('/:leadersID')
.all( (req,res,next)=>{
    res.statusCode =200;
    res.setHeader('Content-Type','Text/html');
    next();
})
.get((req,res,next)=>{
    res.end('will send details of the leader :'+req.params.leadersID + " to you ");
})
.post((req,res,next)=>{
    res.statusCode=403;
    res.end('operation post not supported');
})
.put((req,res,next)=>{
    
    res.write('updating leader '  +req.params.leadersID);
    res.end(' will update the leader :'+req.body.name+' with details : '+req.body.description)
})
.delete((req,res,next)=>{
    res.end('delete leader '+req.params.leadersID);
});


module.exports = leaderRouter;