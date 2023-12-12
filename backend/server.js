require("dotenv").config()

const express = require("express")
const trips = require("./routes/trips")

const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
	console.log(req.path, req.method)
	next()
})

// routing
app.use("/api/v0/trips", trips)

const PORT = process.env.PORT || 4321
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}...`)
})
