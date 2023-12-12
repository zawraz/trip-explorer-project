import { useContext } from "react"
import { TripsContext } from "../context/TripsContext"

export default function useTripsContext() {
	const context = useContext(TripsContext)

	if (!context)
		throw Error("useTripsContext() must be used inside TripsContextProvider")

	return context
}
