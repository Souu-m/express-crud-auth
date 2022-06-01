const jwt = require('jsonwebtoken');
require ('dotenv').config();

const verifyJWT = (req, res, next) =>{
    const authHeader = req.headers['authorization'];
    if (! authHeader) return res.sendStatus(401);
    console.log(authHeader); //bearer token
    const token = authHeader && authHeader.split(' ')[1];
    console.log(token)
    
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            if (err){
                return res.sendStatus(403),
                console.log("not decoded")
            } //
            req.user = decoded.username;
            console.log(" decoded")
            next();

        }
    )

}

module.exports = verifyJWT