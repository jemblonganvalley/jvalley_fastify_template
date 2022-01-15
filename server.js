import Fastify from "fastify"
import env from "dotenv"
import user_route from "./routes/user_routes"
import fastifyCookie from "fastify-cookie"
import path from "path"
import admin_routes from "./routes/admin_routes"
import multer from "fastify-multer"
env.config()

const app = Fastify({
	logger: true,
})

app.register(multer.contentParser)
app.register(fastifyCookie)
app.register(require("fastify-express"))
app.register(require("fastify-static"), {
	root: path.join(__dirname, "static/"),
})

//routes
app.register(user_route, {
	prefix: "/api",
})
app.register(admin_routes, {
	prefix: "/api",
})

app.listen(process.env.PORT, () => {
	console.log(`Listen port 5000}`)
})
