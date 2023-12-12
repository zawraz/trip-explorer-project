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
			iteration * batchSize,
			(iteration + 1) * batchSize
		)

		isCalled.current && setDisplayedTrips([...displayedTrips, ...newTrips])
		isCalled.current = false
	}

	const onScroll = (): void => {
		isCalled.current = true
		const scrollTop = document.documentElement.scrollTop
		const scrollHeight = document.documentElement.scrollHeight
		const clientHeight = document.documentElement.clientHeight

		if (scrollTop + clientHeight >= scrollHeight) {
			setIteration(iteration + 1)
		}
	}

	useEffect(() => {
		if (allTrips?.length > 0) {
			fetchBatch(iteration, 12)
		}
	}, [allTrips, iteration])

	useEffect(() => {
		window.addEventListener("scroll", onScroll)
		return () => window.removeEventListener("scroll", onScroll)
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
