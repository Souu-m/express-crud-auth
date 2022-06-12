// const db = require("../models");

// const jwt = require('jsonwebtoken');
// require ('dotenv').config();

// const handleRefreshToken =  (req, res) => {
// 	const cookies = req.cookies
//     //if we have cookies and if we do this cookies we check jwt if not exist we return 400
// 	if (!cookies?.jwt) {
// 		return res
// 			.status(401)
// 	}
//     console.log(cookies.jwt) // we want to see the values
//     const refreshToken = cookies.jwt;
// 	const foundUser = db.UsersAccount.findOne({refreshToken }).exec();
// 	//forbidden
// 	if (!foundUser) {	return res.sendStatus(403);	}

//     // evaluate jwt
//     jwt.verify(
//         refreshToken,
//         process.env.REFRESH_TOKEN_SECRET,
//         (err, decoded) => {
//             if (err || foundUser.username !== decoded.username)
//             return res.sendStatus(403);
//             const accessToken = jwt.sign(
//                 {'username' : decoded.username},
//                 process.env.ACCESS_TOKEN_SECRET,
//                 {expiresIn : '30s'}
//             );
//             res.json({ accessToken})
//          }
//     );
// };

// module.exports = { handleRefreshToken }
