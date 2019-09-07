const express = require ('express');
const bodyParser = require ('body-parser');
const dishRouter =express.Router();
dishRouter.use(bodyParser.json())
dishRouter.route('/')
.all( (req,res,next)=>{
    res.statusCode =200;
    res.setHeader('Content-Type','Text/html');
    next();
})
.get((req,res,next)=>{
    res.end('will send you all dishes');
})
.post((req,res,next)=>{
    res.end('will send you '+req.body.name+' with details '+req.body.description);
})
.put((req,res,next)=>{
    res.statusCode=403;
    res.end('operation put not supported');
})
.delete((req,res,next)=>{
    res.end('delete all dishes');
})

//parameters : 
dishRouter.route('/:dishID')
.all( (req,res,next)=>{
    res.statusCode =200;
    res.setHeader('Content-Type','Text/html');
    next();
})
.get((req,res,next)=>{
    res.end('will send details of the dish :'+req.params.dishID + " to you ");
})
.post((req,res,next)=>{
    res.statusCode=403;
    res.end('operation post not supported');
})
.put((req,res,next)=>{
    
    res.write('updating dish '  +req.params.dishID);
    res.write('will update the dish :'+req.body.name+' with details '+req.body.description)
})
.delete((req,res,next)=>{
    res.end('delete dishe '+req.params.dishID);
});


module.exports= dishRouter ;
