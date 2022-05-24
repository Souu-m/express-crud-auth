module.exports = async () => {
	const errhandler = (err) => {
		console.error("error :", err);
	};
	const User = require("./models/users");
	const user = await User.create({
		FirstName: "sam",
		LastName: "s",
		Branche: "gpl",
		Password: "222",
	}).catch(errhandler);
};
