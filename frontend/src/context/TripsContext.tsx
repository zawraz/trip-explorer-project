import { createContext, useEffect, useState } from "react"
import { Trips } from "../types"

type TripsContextType = { allTrips: Trips }

export const TripsContext = createContext<TripsContextType | undefined>(
	undefined
)

export function TripsContextProvider({
	children,
}: {
	children: React.ReactNode
}) {
	const [allTrips, setAllTrips] = useState<Trips>([])

	useEffect(() => {
		const fetchAllTrips = async (): Promise<void> => {
			try {
				const res = await fetch("/api/v0/trips")
				if (!res.ok) {
					throw new Error("Failed to fetch trips")
				}
				const allTripsData: Trips = await res.json()
				setAllTrips(allTripsData)
			} catch (error) {
				console.error("Error fetching trips: ", error)
			}
		}
		fetchAllTrips()
	}, [])
	return (
		<TripsContext.Provider value={{ allTrips }}>
			{children}
		</TripsContext.Provider>
	)
}
