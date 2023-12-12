const getAllTrips = async (req, res) => {
	try {
		const response = await fetch("http://localhost:3000/trips")
		const allTrips = await response.json()

		res.status(200).json(allTrips)
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}

// GET a single workout
const getTrip = async (req, res) => {
	const { id } = req.params

	try {
		const response = await fetch("http://localhost:3000/trips")
		const allTrips = await response.json()
		const trip = allTrips.find((trip) => trip.id == id)

		if (!trip) {
			return res
				.status(404)
				.json({ error: `Cannot find a trip with an id: ${id}.` })
		}

		res.status(200).json(trip)
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}

module.exports = {
	getAllTrips,
	getTrip,
}
