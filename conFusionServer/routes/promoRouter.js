const express = require ('express');
const bodyParser = require('body-parser');
const promoRouter = express.Router();
promoRouter.use(bodyParser.json());
promoRouter.route('/')
.all((req,res,next)=>{
    res.statusCode =200;
    res.setHeader('Content-Type','Text/html');
    next();
})
.get((req,res,next)=>{
    res.end(' will send you all promotions ')
})
.post((req,res,next)=>{
    res.end('will send you '+req.body.name+' with details : '+req.body.description);
})
.put((req,res,next)=>{
    statusCode = 403 ;
    res.end ('PUT operation is not supported on /promoions');
})
.delete((req,res,next)=>{
    res.end('Deleting all promotions')
    
});


//parameters : 
promoRouter.route('/:promotionsID')
.all( (req,res,next)=>{
    res.statusCode =200;
    res.setHeader('Content-Type','Text/html');
    next();
})
.get((req,res,next)=>{
    res.end('will send details of the promotion :'+req.params.promotionsID + " to you ");
})
.post((req,res,next)=>{
    res.statusCode=403;
    res.end('operation post not supported');
})
.put((req,res,next)=>{
    
    res.write('updating promotion '  +req.params.promotionsID);
    res.end(' will update the promotion :'+req.body.name+' with details : '+req.body.description)
})
.delete((req,res,next)=>{
    res.end('delete promotion '+req.params.promotionsID);
});


module.exports = promoRouter;