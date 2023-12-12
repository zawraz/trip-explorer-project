const express = require("express")
const { getAllTrips, getTrip } = require("../controllers/tripsController")

const router = express.Router()

// GET
router.get("/", getAllTrips)
router.get("/:id", getTrip)

module.exports = router
