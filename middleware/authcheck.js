export const authCheck = (req, res, next) => {
	let ck = req.cookies["_app"]
	if (!ck) {
		res.status(401).send({
			success: false,
			msg: "login dulu",
		})
		return
	}

	next()
}
