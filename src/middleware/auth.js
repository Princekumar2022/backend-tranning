const jwt = require("jsonwebtoken");


const authenticate = function (req, res, next) {
    try {
        let token = req.headers["x-Auth-token"];
     if (!token) token = req.headers["x-auth-token"];
    if (!token) return res.status(401).send({ status: false, msg: "token must be present" });
  
    console.log(token);

    let decodedToken = jwt.verify(token, "functionup-plutonium-very-very-secret-key");
    if (!decodedToken) {
      return res.status(403).send({ status: false, msg: "token is invalid" });
    }
    req.userLoggedIn=decodedToken.userId

    next()
        
    } catch (error) {
        return res.status(500).send({msg: "SERVER ISSUE"})
        
    }
    
    
   
}


const authorise = function(req, res, next) {
    try {
        let requestUserId = req.params.userId
        if(requestUserId != req.userLoggedIn){ return res.status(403).send({status: false, msg: "permission denied"})
    }
        next()
        
    } catch (error) {
        return res.status(500).send({msg: "SERVER ISSUE"})
        
    }
   
}





module.exports.authenticate = authenticate
module.exports.authorise = authorise