
function errorHandler(err, req, res, next){
     // jwt authentication error
    if(err.name === 'UnauthorizedError'){
        res.status(401).json({message:"The user is not authorized"})
      }
      // validation error
      if(err.name==='ValidationError'){
          res.status(401).json({message:err})
      }
      // default to 500 server error
      return  res.status(500),json(err);
}
module.exports=errorHandler;

