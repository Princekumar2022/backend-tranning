const jwt = require("jsonwebtoken");


const authenticate = function (req, res, next) {
    
    let token = req.headers["x-Auth-token"];
     if (!token) token = req.headers["x-auth-token"];
    if (!token) return res.send({ status: false, msg: "token must be present" });
  
    console.log(token);

    let decodedToken = jwt.verify(token, "functionup-plutonium-very-very-secret-key");
    if (!decodedToken) {
      return res.send({ status: false, msg: "token is invalid" });
    }
    req.userLoggedIn=decodedToken.userId

    next()
   
}


const authorise = function(req, res, next) {
    let requestUserId = req.params.userId
    if(requestUserId != req.userLoggedIn){ return res.send({status: false, msg: "permission denied"})
}
    next()
}





module.exports.authenticate = authenticate
module.exports.authorise = authorise