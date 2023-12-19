import { useEffect, useRef, useState } from "react"
import TripCard from "../components/TripCard"
import { SimpleGrid } from "@chakra-ui/react"
import useTripsContext from "../hooks/useTripsContext"
import { Trips } from "../types"

export default function Dashboard() {
	const { allTrips } = useTripsContext()
	const [displayedTrips, setDisplayedTrips] = useState<Trips>([])
	const [iteration, setIteration] = useState(0)
	const isCalled = useRef(true)

	const fetchBatch = (iteration: number, batchSize: number = 9): void => {
		const newTrips = allTrips?.slice(
			(iteration - 1) * batchSize,
			iteration * batchSize
		)
		isCalled.current && setDisplayedTrips([...displayedTrips, ...newTrips])
		isCalled.current = false
	}

	const handleUpdate = (): void => {
		isCalled.current = true
		const scrollTop = document.documentElement.scrollTop
		const scrollHeight = document.documentElement.scrollHeight
		const clientHeight = document.documentElement.clientHeight

		if (scrollTop + clientHeight + 5 >= scrollHeight) {
			setIteration((prev) => prev + 1)
		}
	}

	useEffect(() => {
		if (allTrips?.length > 0) {
			fetchBatch(iteration, 12)
		}
	}, [allTrips, iteration])

	useEffect(() => {
		handleUpdate()
		window.addEventListener("scroll", handleUpdate)
		return () => {
			window.removeEventListener("scroll", handleUpdate)
		}
	}, [displayedTrips])

	return (
		<SimpleGrid pt={10} spacing={10} minChildWidth={300}>
			{displayedTrips?.map(
				({ id, title, photoUrl, countries, days, co2kilograms, rating }) => (
					<TripCard
						id={id}
						key={id}
						title={title}
						bgImg={photoUrl}
						countries={countries}
						days={days}
						emissionsOffset={co2kilograms}
						tripRating={rating}
					/>
				)
			)}
		</SimpleGrid>
	)
}
